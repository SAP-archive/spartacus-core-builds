import { __decorate, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
var AnonymousConsentsEffects = /** @class */ (function () {
    function AnonymousConsentsEffects(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService) {
        var _this = this;
        this.actions$ = actions$;
        this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
        this.authService = authService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentService = anonymousConsentService;
        this.userConsentService = userConsentService;
        this.checkConsentVersions$ = this.actions$.pipe(ofType(AnonymousConsentsActions.ANONYMOUS_CONSENT_CHECK_UPDATED_VERSIONS), withLatestFrom(this.anonymousConsentService.getConsents()), concatMap(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], currentConsents = _b[1];
            // TODO{#8158} - remove this if block
            if (!_this.anonymousConsentTemplatesConnector.loadAnonymousConsents()) {
                return of(new AnonymousConsentsActions.LoadAnonymousConsentTemplates());
            }
            return _this.anonymousConsentTemplatesConnector
                .loadAnonymousConsents()
                .pipe(map(function (newConsents) {
                var currentConsentVersions = currentConsents.map(function (consent) { return consent.templateVersion; });
                var newConsentVersions = newConsents.map(function (consent) { return consent.templateVersion; });
                return _this.detectUpdatedVersion(currentConsentVersions, newConsentVersions);
            }), switchMap(function (updated) {
                return updated
                    ? of(new AnonymousConsentsActions.LoadAnonymousConsentTemplates())
                    : EMPTY;
            }), catchError(function (error) {
                return of(new AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)));
            }));
        }));
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), withLatestFrom(this.anonymousConsentService.getTemplates()), concatMap(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], currentConsentTemplates = _b[1];
            return _this.anonymousConsentTemplatesConnector
                .loadAnonymousConsentTemplates()
                .pipe(mergeMap(function (newConsentTemplates) {
                var updated = false;
                if (currentConsentTemplates &&
                    currentConsentTemplates.length !== 0) {
                    updated = _this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
                }
                return [
                    new AnonymousConsentsActions.LoadAnonymousConsentTemplatesSuccess(newConsentTemplates),
                    new AnonymousConsentsActions.ToggleAnonymousConsentTemplatesUpdated(updated),
                ];
            }), catchError(function (error) {
                return of(new AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail(makeErrorSerializable(error)));
            }));
        }));
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter(function () { return Boolean(_this.anonymousConsentsConfig.anonymousConsents); }), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter(function (_a) {
            var _b = __read(_a, 2), registerAction = _b[1];
            return Boolean(registerAction);
        }), switchMap(function () {
            return _this.anonymousConsentService.getConsents().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.anonymousConsentService.getTemplates(), _this.authService.isUserLoggedIn()), filter(function (_a) {
                var _b = __read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            }), concatMap(function (_a) {
                var e_1, _b, e_2, _c;
                var _d = __read(_a, 4), consents = _d[0], userId = _d[1], templates = _d[2], _loggedIn = _d[3];
                var actions = [];
                try {
                    for (var consents_1 = __values(consents), consents_1_1 = consents_1.next(); !consents_1_1.done; consents_1_1 = consents_1.next()) {
                        var consent = consents_1_1.value;
                        if (_this.anonymousConsentService.isConsentGiven(consent) &&
                            (!_this.anonymousConsentsConfig.anonymousConsents
                                .requiredConsents ||
                                !_this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(consent.templateCode))) {
                            try {
                                for (var templates_1 = (e_2 = void 0, __values(templates)), templates_1_1 = templates_1.next(); !templates_1_1.done; templates_1_1 = templates_1.next()) {
                                    var template = templates_1_1.value;
                                    if (template.id === consent.templateCode) {
                                        actions.push(new UserActions.TransferAnonymousConsent({
                                            userId: userId,
                                            consentTemplateId: template.id,
                                            consentTemplateVersion: template.version,
                                        }));
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (templates_1_1 && !templates_1_1.done && (_c = templates_1.return)) _c.call(templates_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (consents_1_1 && !consents_1_1.done && (_b = consents_1.return)) _b.call(consents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            }));
        }));
        this.giveRequiredConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter(function (action) {
            return Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents.requiredConsents) &&
                Boolean(action);
        }), concatMap(function () {
            return _this.userConsentService.getConsentsResultSuccess().pipe(withLatestFrom(_this.authService.getOccUserId(), _this.userConsentService.getConsents(), _this.authService.isUserLoggedIn()), filter(function (_a) {
                var _b = __read(_a, 4), loggedIn = _b[3];
                return loggedIn;
            }), tap(function (_a) {
                var _b = __read(_a, 4), loaded = _b[0], _userId = _b[1], _templates = _b[2], _loggedIn = _b[3];
                if (!loaded) {
                    _this.userConsentService.loadConsents();
                }
            }), map(function (_a) {
                var _b = __read(_a, 4), _loaded = _b[0], userId = _b[1], templates = _b[2], _loggedIn = _b[3];
                return { userId: userId, templates: templates };
            }), concatMap(function (_a) {
                var e_3, _b;
                var userId = _a.userId, templates = _a.templates;
                var actions = [];
                try {
                    for (var templates_2 = __values(templates), templates_2_1 = templates_2.next(); !templates_2_1.done; templates_2_1 = templates_2.next()) {
                        var template = templates_2_1.value;
                        if (_this.userConsentService.isConsentWithdrawn(template.currentConsent) &&
                            _this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id)) {
                            actions.push(new UserActions.GiveUserConsent({
                                userId: userId,
                                consentTemplateId: template.id,
                                consentTemplateVersion: template.version,
                            }));
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (templates_2_1 && !templates_2_1.done && (_b = templates_2.return)) _b.call(templates_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (actions.length > 0) {
                    return actions;
                }
                return EMPTY;
            }));
        }));
    }
    /**
     * Compares the given versions and determines if there's a mismatch,
     * in which case `true` is returned.
     *
     * @param currentVersions versions of the current consents
     * @param newVersions versions of the new consents
     */
    AnonymousConsentsEffects.prototype.detectUpdatedVersion = function (currentVersions, newVersions) {
        if (currentVersions.length !== newVersions.length) {
            return true;
        }
        for (var i = 0; i < newVersions.length; i++) {
            if (currentVersions[i] !== newVersions[i]) {
                return true;
            }
        }
        return false;
    };
    AnonymousConsentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AnonymousConsentTemplatesConnector },
        { type: AuthService },
        { type: AnonymousConsentsConfig },
        { type: AnonymousConsentsService },
        { type: UserConsentService }
    ]; };
    __decorate([
        Effect()
    ], AnonymousConsentsEffects.prototype, "checkConsentVersions$", void 0);
    __decorate([
        Effect()
    ], AnonymousConsentsEffects.prototype, "loadAnonymousConsentTemplates$", void 0);
    __decorate([
        Effect()
    ], AnonymousConsentsEffects.prototype, "transferAnonymousConsentsToUser$", void 0);
    __decorate([
        Effect()
    ], AnonymousConsentsEffects.prototype, "giveRequiredConsentsToUser$", void 0);
    AnonymousConsentsEffects = __decorate([
        Injectable()
    ], AnonymousConsentsEffects);
    return AnonymousConsentsEffects;
}());
export { AnonymousConsentsEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVEO0lBK01FLGtDQUNVLFFBQWlCLEVBQ2pCLGtDQUFzRSxFQUN0RSxXQUF3QixFQUN4Qix1QkFBZ0QsRUFDaEQsdUJBQWlELEVB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a0I7O0lBbk5oRDtRQURDLE1BQU0sRUFBRTsyRUE0Q1A7SUFHRjtRQURDLE1BQU0sRUFBRTtvRkF3Q1A7SUFHRjtRQURDLE1BQU0sRUFBRTtzRkF3RFA7SUFHRjtRQURDLE1BQU0sRUFBRTtpRkEwRFA7SUE3TVMsd0JBQXdCO1FBRHBDLFVBQVUsRUFBRTtPQUNBLHdCQUF3QixDQStPcEM7SUFBRCwrQkFBQztDQUFBLEFBL09ELElBK09DO1NBL09ZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zLCBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY2hlY2tDb25zZW50VmVyc2lvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzXG4gICAgfCBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsXG4gICAgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQU5PTllNT1VTX0NPTlNFTlRfQ0hFQ0tfVVBEQVRFRF9WRVJTSU9OUyksXG4gICAgd2l0aExhdGVzdEZyb20odGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpKSxcbiAgICBjb25jYXRNYXAoKFtfLCBjdXJyZW50Q29uc2VudHNdKSA9PiB7XG4gICAgICAvLyBUT0RPeyM4MTU4fSAtIHJlbW92ZSB0aGlzIGlmIGJsb2NrXG4gICAgICBpZiAoIXRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3Rvci5sb2FkQW5vbnltb3VzQ29uc2VudHMoKSkge1xuICAgICAgICByZXR1cm4gb2YobmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Mb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcygpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRzKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChuZXdDb25zZW50cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnRWZXJzaW9ucyA9IGN1cnJlbnRDb25zZW50cy5tYXAoXG4gICAgICAgICAgICAgIChjb25zZW50KSA9PiBjb25zZW50LnRlbXBsYXRlVmVyc2lvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnNlbnRWZXJzaW9ucyA9IG5ld0NvbnNlbnRzLm1hcChcbiAgICAgICAgICAgICAgKGNvbnNlbnQpID0+IGNvbnNlbnQudGVtcGxhdGVWZXJzaW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXRlY3RVcGRhdGVkVmVyc2lvbihcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRWZXJzaW9ucyxcbiAgICAgICAgICAgICAgbmV3Q29uc2VudFZlcnNpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN3aXRjaE1hcCgodXBkYXRlZCkgPT5cbiAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgPyBvZihuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCkpXG4gICAgICAgICAgICAgIDogRU1QVFlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcyQ6IE9ic2VydmFibGU8XG4gICAgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkFub255bW91c0NvbnNlbnRzQWN0aW9uc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTE9BRF9BTk9OWU1PVVNfQ09OU0VOVF9URU1QTEFURVMpLFxuICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZ2V0VGVtcGxhdGVzKCkpLFxuICAgIGNvbmNhdE1hcCgoW18sIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzXSkgPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgobmV3Q29uc2VudFRlbXBsYXRlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMgJiZcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdXBkYXRlZCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcyxcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgICAgICAgICB1cGRhdGVkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIChhY3Rpb24pID0+XG4gICAgICAgIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cykgJiZcbiAgICAgICAgQm9vbGVhbihcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHNcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKGFjdGlvbilcbiAgICApLFxuICAgIGNvbmNhdE1hcCgoKSA9PlxuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRTdWNjZXNzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgdGFwKChbbG9hZGVkLCBfdXNlcklkLCBfdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmxvYWRDb25zZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoW19sb2FkZWQsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcklkLCB0ZW1wbGF0ZXMgfTtcbiAgICAgICAgfSksXG4gICAgICAgIGNvbmNhdE1hcCgoeyB1c2VySWQsIHRlbXBsYXRlcyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIG9mIHRlbXBsYXRlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRXaXRoZHJhd24oXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuY3VycmVudENvbnNlbnRcbiAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiB0ZW1wbGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3I6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c0NvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50U2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlckNvbnNlbnRTZXJ2aWNlOiBVc2VyQ29uc2VudFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDb21wYXJlcyB0aGUgZ2l2ZW4gdmVyc2lvbnMgYW5kIGRldGVybWluZXMgaWYgdGhlcmUncyBhIG1pc21hdGNoLFxuICAgKiBpbiB3aGljaCBjYXNlIGB0cnVlYCBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9ucyB2ZXJzaW9ucyBvZiB0aGUgY3VycmVudCBjb25zZW50c1xuICAgKiBAcGFyYW0gbmV3VmVyc2lvbnMgdmVyc2lvbnMgb2YgdGhlIG5ldyBjb25zZW50c1xuICAgKi9cbiAgcHJpdmF0ZSBkZXRlY3RVcGRhdGVkVmVyc2lvbihcbiAgICBjdXJyZW50VmVyc2lvbnM6IG51bWJlcltdLFxuICAgIG5ld1ZlcnNpb25zOiBudW1iZXJbXVxuICApOiBib29sZWFuIHtcbiAgICBpZiAoY3VycmVudFZlcnNpb25zLmxlbmd0aCAhPT0gbmV3VmVyc2lvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1ZlcnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY3VycmVudFZlcnNpb25zW2ldICE9PSBuZXdWZXJzaW9uc1tpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
import { __decorate, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, switchMap, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthActions, AuthService } from '../../../auth/index';
import { ANONYMOUS_CONSENTS_FEATURE, isFeatureEnabled, } from '../../../features-config/index';
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
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), concatMap(function (_) {
            return _this.anonymousConsentTemplatesConnector
                .loadAnonymousConsentTemplates()
                .pipe(withLatestFrom(_this.anonymousConsentService.getTemplates()), mergeMap(function (_a) {
                var _b = __read(_a, 2), newConsentTemplates = _b[0], currentConsentTemplates = _b[1];
                var updated = false;
                if (Boolean(currentConsentTemplates) &&
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
        this.transferAnonymousConsentsToUser$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), filter(function () {
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) && Boolean(_this.anonymousConsentsConfig.anonymousConsents);
        }), withLatestFrom(this.actions$.pipe(ofType(UserActions.REGISTER_USER_SUCCESS))), filter(function (_a) {
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
            return isFeatureEnabled(_this.anonymousConsentsConfig, ANONYMOUS_CONSENTS_FEATURE) &&
                Boolean(_this.anonymousConsentsConfig.anonymousConsents) &&
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUQ7SUEyS0Usa0NBQ1Us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QyxFQUFFLENBQUM7O29CQUNsRCxLQUF1QixJQUFBLGNBQUEsU0FBQSxTQUFTLENBQUEsb0NBQUEsMkRBQUU7d0JBQTdCLElBQU0sUUFBUSxzQkFBQTt3QkFDakIsSUFDRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQ3hDLFFBQVEsQ0FBQyxjQUFjLENBQ3hCOzRCQUNELEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3RFLFFBQVEsQ0FBQyxFQUFFLENBQ1osRUFDRDs0QkFDQSxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQztnQ0FDOUIsTUFBTSxRQUFBO2dDQUNOLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxFQUFFO2dDQUM5QixzQkFBc0IsRUFBRSxRQUFRLENBQUMsT0FBTzs2QkFDekMsQ0FBQyxDQUNILENBQUM7eUJBQ0g7cUJBQ0Y7Ozs7Ozs7OztnQkFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixPQUFPLE9BQU8sQ0FBQztpQkFDaEI7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUMsQ0FDSDtRQXhDRCxDQXdDQyxDQUNGLENBQ0YsQ0FBQztJQVNDLENBQUM7O2dCQU5nQixPQUFPO2dCQUNtQixrQ0FBa0M7Z0JBQ3pELFdBQVc7Z0JBQ0MsdUJBQXVCO2dCQUN2Qix3QkFBd0I7Z0JBQzdCLGtCQUFrQjs7SUEvS2hEO1FBREMsTUFBTSxFQUFFO29GQXdDUDtJQUdGO1FBREMsTUFBTSxFQUFFO3NGQThEUDtJQUdGO1FBREMsTUFBTSxFQUFFO2lGQThEUDtJQXpLUyx3QkFBd0I7UUFEcEMsVUFBVSxFQUFFO09BQ0Esd0JBQXdCLENBbUxwQztJQUFELCtCQUFDO0NBQUEsQUFuTEQsSUFtTEM7U0FuTFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRSxcbiAgaXNGZWF0dXJlRW5hYmxlZCxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25zZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvZmFjYWRlL3VzZXItY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzJDogT2JzZXJ2YWJsZTxcbiAgICBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5MT0FEX0FOT05ZTU9VU19DT05TRU5UX1RFTVBMQVRFUyksXG4gICAgY29uY2F0TWFwKF8gPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpKSxcbiAgICAgICAgICBtZXJnZU1hcCgoW25ld0NvbnNlbnRUZW1wbGF0ZXMsIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgQm9vbGVhbihjdXJyZW50Q29uc2VudFRlbXBsYXRlcykgJiZcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdXBkYXRlZCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcyxcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgICAgICAgICB1cGRhdGVkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHRyYW5zZmVyQW5vbnltb3VzQ29uc2VudHNUb1VzZXIkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudCB8IE9ic2VydmFibGU8bmV2ZXI+XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlPEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzPihcbiAgICAgIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9TVUNDRVNTXG4gICAgKSxcbiAgICBmaWx0ZXIoXG4gICAgICAoKSA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJiBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpXG4gICAgKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPFVzZXJBY3Rpb25zLlJlZ2lzdGVyVXNlclN1Y2Nlc3M+KFxuICAgICAgICAgIFVzZXJBY3Rpb25zLlJFR0lTVEVSX1VTRVJfU1VDQ0VTU1xuICAgICAgICApXG4gICAgICApXG4gICAgKSxcbiAgICBmaWx0ZXIoKFssIHJlZ2lzdGVyQWN0aW9uXSkgPT4gQm9vbGVhbihyZWdpc3RlckFjdGlvbikpLFxuICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRDb25zZW50cygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5nZXRUZW1wbGF0ZXMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIGNvbmNhdE1hcCgoW2NvbnNlbnRzLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLlRyYW5zZmVyQW5vbnltb3VzQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zZW50IG9mIGNvbnNlbnRzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuaXNDb25zZW50R2l2ZW4oY29uc2VudCkgJiZcbiAgICAgICAgICAgICAgKCF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkQ29uc2VudHMgfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgY29uc2VudC50ZW1wbGF0ZUNvZGVcbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmlkID09PSBjb25zZW50LnRlbXBsYXRlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IHRlbXBsYXRlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBnaXZlUmVxdWlyZWRDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuR2l2ZVVzZXJDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgIGFjdGlvbiA9PlxuICAgICAgICBpc0ZlYXR1cmVFbmFibGVkKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcsXG4gICAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRTX0ZFQVRVUkVcbiAgICAgICAgKSAmJlxuICAgICAgICBCb29sZWFuKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpICYmXG4gICAgICAgIEJvb2xlYW4oXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbihhY3Rpb24pXG4gICAgKSxcbiAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzUmVzdWx0U3VjY2VzcygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKSxcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKChbLCAsICwgbG9nZ2VkSW5dKSA9PiBsb2dnZWRJbiksXG4gICAgICAgIHRhcCgoW2xvYWRlZCwgX3VzZXJJZCwgX3RlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtfbG9hZGVkLCB1c2VySWQsIHRlbXBsYXRlcywgX2xvZ2dlZEluXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IHVzZXJJZCwgdGVtcGxhdGVzIH07XG4gICAgICAgIH0pLFxuICAgICAgICBjb25jYXRNYXAoKHsgdXNlcklkLCB0ZW1wbGF0ZXMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudFtdID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmN1cnJlbnRDb25zZW50XG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkdpdmVVc2VyQ29uc2VudCh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiB0ZW1wbGF0ZS52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yOiBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFNlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==
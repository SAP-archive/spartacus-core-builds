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
        this.loadAnonymousConsentTemplates$ = this.actions$.pipe(ofType(AnonymousConsentsActions.LOAD_ANONYMOUS_CONSENT_TEMPLATES), concatMap(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvZWZmZWN0cy9hbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixnQkFBZ0IsR0FDakIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDNUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUQ7SUEyS0Usa0NBQ1UsUUFBaUIsRUFDakIsa0NBQXNFLEVBQ3RFLFdBQXdCLEVBQ3hCLHVCQUFnRCxFQUNoRCx1QkFBaUQsRUFDakQsa0JBQXNDO1FBTmhELGlCQU9JO1FBTk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1Q0FBa0MsR0FBbEMsa0NBQWtDLENBQW9DO1FBQ3RFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUEwQjtRQUNqRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBL0toRCxtQ0FBOEIsR0FFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUNqRSxTQUFTLENBQUM7WUFDUixPQUFBLEtBQUksQ0FBQyxrQ0FBa0M7aUJBQ3BDLDZCQUE2QixFQUFFO2lCQUMvQixJQUFJLENBQ0gsY0FBYyxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUMzRCxRQUFRLENBQUMsVUFBQyxFQUE4QztvQkFBOUMsa0JBQThDLEVBQTdDLDJCQUFtQixFQUFFLCtCQUF1QjtnQkFDckQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUNFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztvQkFDaEMsdUJBQXVCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDcEM7b0JBQ0EsT0FBTyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FDM0QsdUJBQXVCLEVBQ3ZCLG1CQUFtQixDQUNwQixDQUFDO2lCQUNIO2dCQUVELE9BQU87b0JBQ0wsSUFBSSx3QkFBd0IsQ0FBQyxvQ0FBb0MsQ0FDL0QsbUJBQW1CLENBQ3BCO29CQUNELElBQUksd0JBQXdCLENBQUMsc0NBQXNDLENBQ2pFLE9BQU8sQ0FDUjtpQkFDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLHdCQUF3QixDQUFDLGlDQUFpQyxDQUM1RCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGO1FBaENILENBZ0NHLENBQ0osQ0FDRixDQUFDO1FBR0YscUNBQWdDLEdBRTVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osV0FBVyxDQUFDLHVCQUF1QixDQUNwQyxFQUNELE1BQU0sQ0FDSjtZQUNFLE9BQUEsZ0JBQWdCLENBQ2QsS0FBSSxDQUFDLHVCQUF1QixFQUM1QiwwQkFBMEIsQ0FDM0IsSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1FBSDVELENBRzRELENBQy9ELEVBQ0QsY0FBYyxDQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQ0osV0FBVyxDQUFDLHFCQUFxQixDQUNsQyxDQUNGLENBQ0YsRUFDRCxNQUFNLENBQUMsVUFBQyxFQUFrQjtnQkFBbEIsa0JBQWtCLEVBQWYsc0JBQWM7WUFBTSxPQUFBLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFBdkIsQ0FBdUIsQ0FBQyxFQUN2RCxTQUFTLENBQUM7WUFDUixPQUFBLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzdDLGNBQWMsQ0FDWixLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUMvQixLQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLEVBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQ2xDLEVBQ0QsTUFBTSxDQUFDLFVBQUMsRUFBZ0I7b0JBQWhCLGtCQUFnQixFQUFULGdCQUFRO2dCQUFNLE9BQUEsUUFBUTtZQUFSLENBQVEsQ0FBQyxFQUN0QyxTQUFTLENBQUMsVUFBQyxFQUF3Qzs7b0JBQXhDLGtCQUF3QyxFQUF2QyxnQkFBUSxFQUFFLGNBQU0sRUFBRSxpQkFBUyxFQUFFLGlCQUFTO2dCQUNoRCxJQUFNLE9BQU8sR0FBMkMsRUFBRSxDQUFDOztvQkFDM0QsS0FBc0IsSUFBQSxhQUFBLFNBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO3dCQUEzQixJQUFNLE9BQU8scUJBQUE7d0JBQ2hCLElBQ0UsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7NEJBQ3BELENBQUMsQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCO2lDQUM3QyxnQkFBZ0I7Z0NBQ2pCLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDdkUsT0FBTyxDQUFDLFlBQVksQ0FDckIsQ0FBQyxFQUNKOztnQ0FDQSxLQUF1QixJQUFBLDZCQUFBLFNBQUEsU0FBUyxDQUFBLENBQUEsb0NBQUEsMkRBQUU7b0NBQTdCLElBQU0sUUFBUSxzQkFBQTtvQ0FDakIsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0NBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxXQUFXLENBQUMsd0JBQXdCLENBQUM7NENBQ3ZDLE1BQU0sUUFBQTs0Q0FDTixpQkFBaUIsRUFBRSxRQUFRLENBQUMsRUFBRTs0Q0FDOUIsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLE9BQU87eUNBQ3pDLENBQUMsQ0FDSCxDQUFDO3dDQUNGLE1BQU07cUNBQ1A7aUNBQ0Y7Ozs7Ozs7Ozt5QkFDRjtxQkFDRjs7Ozs7Ozs7O2dCQUNELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sT0FBTyxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUNIO1FBckNELENBcUNDLENBQ0YsQ0FDRixDQUFDO1FBR0YsZ0NBQTJCLEdBRXZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQ0osV0FBVyxDQUFDLHVCQUF1QixDQUNwQyxFQUNELE1BQU0sQ0FDSixVQUFDLE1BQU07WUFDTCxPQUFBLGdCQUFnQixDQUNkLEtBQUksQ0FBQyx1QkFBdUIsRUFDNUIsMEJBQTBCLENBQzNCO2dCQUNELE9BQU8sQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3ZELE9BQU8sQ0FDTCxLQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQ2hFO2dCQUNELE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFSZixDQVFlLENBQ2xCLEVBQ0QsU0FBUyxDQUFDO1lBQ1IsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxJQUFJLENBQ3JELGNBQWMsQ0FDWixLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUMvQixLQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLEVBQ3JDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQ2xDLEVBQ0QsTUFBTSxDQUFDLFVBQUMsRUFBZ0I7b0JBQWhCLGtCQUFnQixFQUFULGdCQUFRO2dCQUFNLE9BQUEsUUFBUTtZQUFSLENBQVEsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQyxFQUF3QztvQkFBeEMsa0JBQXdDLEVBQXZDLGNBQU0sRUFBRSxlQUFPLEVBQUUsa0JBQVUsRUFBRSxpQkFBUztnQkFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3hDO1lBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUMsRUFBdUM7b0JBQXZDLGtCQUF1QyxFQUF0QyxlQUFPLEVBQUUsY0FBTSxFQUFFLGlCQUFTLEVBQUUsaUJBQVM7Z0JBQ3pDLE9BQU8sRUFBRSxNQUFNLFFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxVQUFDLEVBQXFCOztvQkFBbkIsa0JBQU0sRUFBRSx3QkFBUztnQkFDNUIsSUFBTSxPQUFPLEdBQWtDLEVBQUUsQ0FBQzs7b0JBQ2xELEtBQXVCLElBQUEsY0FBQSxTQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTt3QkFBN0IsSUFBTSxRQUFRLHNCQUFBO3dCQUNqQixJQUNFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FDeEMsUUFBUSxDQUFDLGNBQWMsQ0FDeEI7NEJBQ0QsS0FBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDdEUsUUFBUSxDQUFDLEVBQUUsQ0FDWixFQUNEOzRCQUNBLE9BQU8sQ0FBQyxJQUFJLENBQ1YsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDO2dDQUM5QixNQUFNLFFBQUE7Z0NBQ04saUJBQWlCLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0NBQzlCLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxPQUFPOzZCQUN6QyxDQUFDLENBQ0gsQ0FBQzt5QkFDSDtxQkFDRjs7Ozs7Ozs7O2dCQUNELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sT0FBTyxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUNIO1FBeENELENBd0NDLENBQ0YsQ0FDRixDQUFDO0lBU0MsQ0FBQzs7Z0JBTmdCLE9BQU87Z0JBQ21CLGtDQUFrQztnQkFDekQsV0FBVztnQkFDQyx1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDN0Isa0JBQWtCOztJQS9LaEQ7UUFEQyxNQUFNLEVBQUU7b0ZBd0NQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7c0ZBOERQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aUZBOERQO0lBektTLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0FtTHBDO0lBQUQsK0JBQUM7Q0FBQSxBQW5MRCxJQW1MQztTQW5MWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucywgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFLFxuICBpc0ZlYXR1cmVFbmFibGVkLFxufSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9mYWNhZGUvdXNlci1jb25zZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPFxuICAgIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Bbm9ueW1vdXNDb25zZW50c0FjdGlvbnNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkxPQURfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTKSxcbiAgICBjb25jYXRNYXAoKCkgPT5cbiAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvclxuICAgICAgICAubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpKSxcbiAgICAgICAgICBtZXJnZU1hcCgoW25ld0NvbnNlbnRUZW1wbGF0ZXMsIGN1cnJlbnRDb25zZW50VGVtcGxhdGVzXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgQm9vbGVhbihjdXJyZW50Q29uc2VudFRlbXBsYXRlcykgJiZcbiAgICAgICAgICAgICAgY3VycmVudENvbnNlbnRUZW1wbGF0ZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdXBkYXRlZCA9IHRoaXMuYW5vbnltb3VzQ29uc2VudFNlcnZpY2UuZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc2VudFRlbXBsYXRlcyxcbiAgICAgICAgICAgICAgICBuZXdDb25zZW50VGVtcGxhdGVzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNTdWNjZXNzKFxuICAgICAgICAgICAgICAgIG5ld0NvbnNlbnRUZW1wbGF0ZXNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZChcbiAgICAgICAgICAgICAgICB1cGRhdGVkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuTG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj5cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGU8QXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlblN1Y2Nlc3M+KFxuICAgICAgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1NcbiAgICApLFxuICAgIGZpbHRlcihcbiAgICAgICgpID0+XG4gICAgICAgIGlzRmVhdHVyZUVuYWJsZWQoXG4gICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICAgICAgICBBTk9OWU1PVVNfQ09OU0VOVFNfRkVBVFVSRVxuICAgICAgICApICYmIEJvb2xlYW4odGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cylcbiAgICApLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGU8VXNlckFjdGlvbnMuUmVnaXN0ZXJVc2VyU3VjY2Vzcz4oXG4gICAgICAgICAgVXNlckFjdGlvbnMuUkVHSVNURVJfVVNFUl9TVUNDRVNTXG4gICAgICAgIClcbiAgICAgIClcbiAgICApLFxuICAgIGZpbHRlcigoWywgcmVnaXN0ZXJBY3Rpb25dKSA9PiBCb29sZWFuKHJlZ2lzdGVyQWN0aW9uKSksXG4gICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKSxcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKVxuICAgICAgICApLFxuICAgICAgICBmaWx0ZXIoKFssICwgLCBsb2dnZWRJbl0pID0+IGxvZ2dlZEluKSxcbiAgICAgICAgY29uY2F0TWFwKChbY29uc2VudHMsIHVzZXJJZCwgdGVtcGxhdGVzLCBfbG9nZ2VkSW5dKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aW9uczogVXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KSAmJlxuICAgICAgICAgICAgICAoIXRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHNcbiAgICAgICAgICAgICAgICAucmVxdWlyZWRDb25zZW50cyB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICBjb25zZW50LnRlbXBsYXRlQ29kZVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQgPT09IGNvbnNlbnQudGVtcGxhdGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5UcmFuc2ZlckFub255bW91c0NvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb25zZW50VGVtcGxhdGVJZDogdGVtcGxhdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGdpdmVSZXF1aXJlZENvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPlxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuU3VjY2Vzcz4oXG4gICAgICBBdXRoQWN0aW9ucy5MT0FEX1VTRVJfVE9LRU5fU1VDQ0VTU1xuICAgICksXG4gICAgZmlsdGVyKFxuICAgICAgKGFjdGlvbikgPT5cbiAgICAgICAgaXNGZWF0dXJlRW5hYmxlZChcbiAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgICAgICAgIEFOT05ZTU9VU19DT05TRU5UU19GRUFUVVJFXG4gICAgICAgICkgJiZcbiAgICAgICAgQm9vbGVhbih0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzKSAmJlxuICAgICAgICBCb29sZWFuKFxuICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50c1xuICAgICAgICApICYmXG4gICAgICAgIEJvb2xlYW4oYWN0aW9uKVxuICAgICksXG4gICAgY29uY2F0TWFwKCgpID0+XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRDb25zZW50c1Jlc3VsdFN1Y2Nlc3MoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldENvbnNlbnRzKCksXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoWywgLCAsIGxvZ2dlZEluXSkgPT4gbG9nZ2VkSW4pLFxuICAgICAgICB0YXAoKFtsb2FkZWQsIF91c2VySWQsIF90ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChbX2xvYWRlZCwgdXNlcklkLCB0ZW1wbGF0ZXMsIF9sb2dnZWRJbl0pID0+IHtcbiAgICAgICAgICByZXR1cm4geyB1c2VySWQsIHRlbXBsYXRlcyB9O1xuICAgICAgICB9KSxcbiAgICAgICAgY29uY2F0TWFwKCh7IHVzZXJJZCwgdGVtcGxhdGVzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb25zOiBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnRbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmlzQ29uc2VudFdpdGhkcmF3bihcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudFxuICAgICAgICAgICAgICApICYmXG4gICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQoe1xuICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlSWQ6IHRlbXBsYXRlLmlkLFxuICAgICAgICAgICAgICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogdGVtcGxhdGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcjogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIGFub255bW91c0NvbnNlbnRTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZVxuICApIHt9XG59XG4iXX0=
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { AsmActions, AsmSelectors } from '../store';
import { AsmAuthStorageService } from './asm-auth-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../state/services/state-persistence.service";
import * as i2 from "@ngrx/store";
import * as i3 from "./asm-auth-storage.service";
/**
 * Responsible for storing ASM state in the browser storage.
 * Uses `StatePersistenceService` mechanism.
 */
export class AsmStatePersistenceService {
    constructor(statePersistenceService, store, authStorageService) {
        this.statePersistenceService = statePersistenceService;
        this.store = store;
        this.authStorageService = authStorageService;
        this.subscription = new Subscription();
        /**
         * Identifier used for storage key.
         */
        this.key = 'asm';
    }
    /**
     * Initializes the synchronization between state and browser storage.
     */
    initSync() {
        this.subscription.add(this.statePersistenceService.syncWithStorage({
            key: this.key,
            state$: this.getAsmState(),
            onRead: (state) => this.onRead(state),
        }));
    }
    /**
     * Gets and transforms state from different sources into the form that should
     * be saved in storage.
     */
    getAsmState() {
        return combineLatest([
            this.store.pipe(select(AsmSelectors.getAsmUi)),
            of(this.authStorageService.getEmulatedUserToken()),
            this.authStorageService.getTokenTarget(),
        ]).pipe(map(([ui, emulatedUserToken, tokenTarget]) => {
            let emulatedToken = emulatedUserToken;
            if (emulatedToken) {
                emulatedToken = Object.assign({}, emulatedUserToken);
                // To minimize risk of user account hijacking we don't persist emulated user refresh_token
                delete emulatedToken.refresh_token;
            }
            return {
                ui,
                emulatedUserToken: emulatedToken,
                tokenTarget,
            };
        }));
    }
    /**
     * Function called on each browser storage read.
     * Used to update state from browser -> state.
     */
    onRead(state) {
        if (state) {
            if (state.ui) {
                this.store.dispatch(new AsmActions.AsmUiUpdate(state.ui));
            }
            if (state.emulatedUserToken) {
                this.authStorageService.setEmulatedUserToken(state.emulatedUserToken);
            }
            if (state.tokenTarget) {
                this.authStorageService.setTokenTarget(state.tokenTarget);
            }
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AsmStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmStatePersistenceService_Factory() { return new AsmStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.AsmAuthStorageService)); }, token: AsmStatePersistenceService, providedIn: "root" });
AsmStatePersistenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: Store },
    { type: AsmAuthStorageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hc20vc2VydmljZXMvYXNtLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQWUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFXaEY7OztHQUdHO0FBSUgsTUFBTSxPQUFPLDBCQUEwQjtJQUdyQyxZQUNZLHVCQUFnRCxFQUNoRCxLQUEwQixFQUMxQixrQkFBeUM7UUFGekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBTDNDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVE1Qzs7V0FFRztRQUNPLFFBQUcsR0FBRyxLQUFLLENBQUM7SUFMbkIsQ0FBQztJQU9KOztPQUVHO0lBQ0ksUUFBUTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDO1lBQzNDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDdEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNuQixPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFO1NBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQztZQUN0QyxJQUFJLGFBQWEsRUFBRTtnQkFDakIsYUFBYSxxQkFBUSxpQkFBaUIsQ0FBRSxDQUFDO2dCQUN6QywwRkFBMEY7Z0JBQzFGLE9BQU8sYUFBYSxDQUFDLGFBQWEsQ0FBQzthQUNwQztZQUNELE9BQU87Z0JBQ0wsRUFBRTtnQkFDRixpQkFBaUIsRUFBRSxhQUFhO2dCQUNoQyxXQUFXO2FBQ1osQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sTUFBTSxDQUFDLEtBQXFCO1FBQ3BDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDdkU7WUFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztZQTVFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCUSx1QkFBdUI7WUFKZixLQUFLO1lBT2IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvbW9kZWxzL2F1dGgtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdGF0ZS9zZXJ2aWNlcy9zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFzbVVpIH0gZnJvbSAnLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucywgQXNtU2VsZWN0b3JzLCBTdGF0ZVdpdGhBc20gfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBBc21BdXRoU3RvcmFnZVNlcnZpY2UsIFRva2VuVGFyZ2V0IH0gZnJvbSAnLi9hc20tYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFTTSBzdGF0ZSBzeW5jZWQgdG8gYnJvd3NlciBzdG9yYWdlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNlZEFzbVN0YXRlIHtcbiAgdWk/OiBBc21VaTtcbiAgZW11bGF0ZWRVc2VyVG9rZW4/OiBBdXRoVG9rZW47XG4gIHRva2VuVGFyZ2V0PzogVG9rZW5UYXJnZXQ7XG59XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHN0b3JpbmcgQVNNIHN0YXRlIGluIHRoZSBicm93c2VyIHN0b3JhZ2UuXG4gKiBVc2VzIGBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZWAgbWVjaGFuaXNtLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBc20+LFxuICAgIHByb3RlY3RlZCBhdXRoU3RvcmFnZVNlcnZpY2U6IEFzbUF1dGhTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIElkZW50aWZpZXIgdXNlZCBmb3Igc3RvcmFnZSBrZXkuXG4gICAqL1xuICBwcm90ZWN0ZWQga2V5ID0gJ2FzbSc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBzeW5jaHJvbml6YXRpb24gYmV0d2VlbiBzdGF0ZSBhbmQgYnJvd3NlciBzdG9yYWdlLlxuICAgKi9cbiAgcHVibGljIGluaXRTeW5jKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luY1dpdGhTdG9yYWdlKHtcbiAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgc3RhdGUkOiB0aGlzLmdldEFzbVN0YXRlKCksXG4gICAgICAgIG9uUmVhZDogKHN0YXRlKSA9PiB0aGlzLm9uUmVhZChzdGF0ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbmQgdHJhbnNmb3JtcyBzdGF0ZSBmcm9tIGRpZmZlcmVudCBzb3VyY2VzIGludG8gdGhlIGZvcm0gdGhhdCBzaG91bGRcbiAgICogYmUgc2F2ZWQgaW4gc3RvcmFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRBc21TdGF0ZSgpOiBPYnNlcnZhYmxlPFN5bmNlZEFzbVN0YXRlPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChBc21TZWxlY3RvcnMuZ2V0QXNtVWkpKSxcbiAgICAgIG9mKHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLmdldEVtdWxhdGVkVXNlclRva2VuKCkpLFxuICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2UuZ2V0VG9rZW5UYXJnZXQoKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbdWksIGVtdWxhdGVkVXNlclRva2VuLCB0b2tlblRhcmdldF0pID0+IHtcbiAgICAgICAgbGV0IGVtdWxhdGVkVG9rZW4gPSBlbXVsYXRlZFVzZXJUb2tlbjtcbiAgICAgICAgaWYgKGVtdWxhdGVkVG9rZW4pIHtcbiAgICAgICAgICBlbXVsYXRlZFRva2VuID0geyAuLi5lbXVsYXRlZFVzZXJUb2tlbiB9O1xuICAgICAgICAgIC8vIFRvIG1pbmltaXplIHJpc2sgb2YgdXNlciBhY2NvdW50IGhpamFja2luZyB3ZSBkb24ndCBwZXJzaXN0IGVtdWxhdGVkIHVzZXIgcmVmcmVzaF90b2tlblxuICAgICAgICAgIGRlbGV0ZSBlbXVsYXRlZFRva2VuLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1aSxcbiAgICAgICAgICBlbXVsYXRlZFVzZXJUb2tlbjogZW11bGF0ZWRUb2tlbixcbiAgICAgICAgICB0b2tlblRhcmdldCxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBicm93c2VyIHN0b3JhZ2UgcmVhZC5cbiAgICogVXNlZCB0byB1cGRhdGUgc3RhdGUgZnJvbSBicm93c2VyIC0+IHN0YXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uUmVhZChzdGF0ZTogU3luY2VkQXNtU3RhdGUpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS51aSkge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBc21BY3Rpb25zLkFzbVVpVXBkYXRlKHN0YXRlLnVpKSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuZW11bGF0ZWRVc2VyVG9rZW4pIHtcbiAgICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2Uuc2V0RW11bGF0ZWRVc2VyVG9rZW4oc3RhdGUuZW11bGF0ZWRVc2VyVG9rZW4pO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLnRva2VuVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuYXV0aFN0b3JhZ2VTZXJ2aWNlLnNldFRva2VuVGFyZ2V0KHN0YXRlLnRva2VuVGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
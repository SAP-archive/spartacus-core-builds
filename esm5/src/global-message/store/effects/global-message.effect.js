import { __decorate, __param, __read } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { concatMap, delay, filter, map, pluck, switchMap, take, withLatestFrom, } from 'rxjs/operators';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { GlobalMessageSelectors } from '../selectors/index';
import { countOfDeepEqualObjects, indexOfFirstOccurrence, } from '../../../util/compare-equal-objects';
import { isPlatformBrowser } from '@angular/common';
var GlobalMessageEffect = /** @class */ (function () {
    function GlobalMessageEffect(actions$, store, config, platformId) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.config = config;
        this.platformId = platformId;
        this.removeDuplicated$ = this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload'), switchMap(function (message) {
            return of(message.text).pipe(withLatestFrom(_this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageEntitiesByType(message.type)))), filter(function (_a) {
                var _b = __read(_a, 2), text = _b[0], messages = _b[1];
                return countOfDeepEqualObjects(text, messages) > 1;
            }), map(function (_a) {
                var _b = __read(_a, 2), text = _b[0], messages = _b[1];
                return new GlobalMessageActions.RemoveMessage({
                    type: message.type,
                    index: indexOfFirstOccurrence(text, messages),
                });
            }));
        }));
        this.hideAfterDelay$ = isPlatformBrowser(this.platformId) // we don't want to run this logic when doing SSR
            ? this.actions$.pipe(ofType(GlobalMessageActions.ADD_MESSAGE), pluck('payload', 'type'), concatMap(function (type) {
                var config = _this.config.globalMessages[type];
                return _this.store.pipe(select(GlobalMessageSelectors.getGlobalMessageCountByType(type)), take(1), filter(function (count) {
                    return config && config.timeout !== undefined && count && count > 0;
                }), delay(config.timeout), switchMap(function () {
                    return of(new GlobalMessageActions.RemoveMessage({
                        type: type,
                        index: 0,
                    }));
                }));
            }))
            : EMPTY;
    }
    GlobalMessageEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: GlobalMessageConfig },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Effect()
    ], GlobalMessageEffect.prototype, "removeDuplicated$", void 0);
    __decorate([
        Effect()
    ], GlobalMessageEffect.prototype, "hideAfterDelay$", void 0);
    GlobalMessageEffect = __decorate([
        Injectable(),
        __param(3, Inject(PLATFORM_ID))
    ], GlobalMessageEffect);
    return GlobalMessageEffect;
}());
export { GlobalMessageEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixHQUFHLEVBQ0gsS0FBSyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDdkIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdwRDtJQStERSw2QkFDVSxRQUFpQixFQUNqQixLQUFvQyxFQUNwQyxNQUEyQixFQUNOLFVBQWU7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBQ04sZUFBVSxHQUFWLFVBQVUsQ0FBSztRQWpFOUMsc0JBQWlCLEdBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFDeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixTQUFTLENBQUMsVUFBQyxPQUFzQjtZQUMvQixPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNuQixjQUFjLENBQ1osS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUNKLHNCQUFzQixDQUFDLDhCQUE4QixDQUNuRCxPQUFPLENBQUMsSUFBSSxDQUNiLENBQ0YsQ0FDRixDQUNGLEVBQ0QsTUFBTSxDQUNKLFVBQUMsRUFBZ0Q7b0JBQWhELGtCQUFnRCxFQUEvQyxZQUFJLEVBQUUsZ0JBQVE7Z0JBQ2QsT0FBQSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUEzQyxDQUEyQyxDQUM5QyxFQUNELEdBQUcsQ0FDRCxVQUFDLEVBQWdEO29CQUFoRCxrQkFBZ0QsRUFBL0MsWUFBSSxFQUFFLGdCQUFRO2dCQUNkLE9BQUEsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsS0FBSyxFQUFFLHNCQUFzQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7aUJBQzlDLENBQUM7WUFIRixDQUdFLENBQ0wsQ0FDRjtRQXJCRCxDQXFCQyxDQUNGLENBQ0YsQ0FBQztRQUdGLG9CQUFlLEdBRVgsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlEQUFpRDtZQUN0RixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFDeEIsU0FBUyxDQUFDLFVBQUMsSUFBdUI7Z0JBQ2hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLE1BQU0sQ0FDSixVQUFDLEtBQWE7b0JBQ1osT0FBQSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDO2dCQUE1RCxDQUE0RCxDQUMvRCxFQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3JCLFNBQVMsQ0FBQztvQkFDUixPQUFBLEVBQUUsQ0FDQSxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQzt3QkFDckMsSUFBSSxNQUFBO3dCQUNKLEtBQUssRUFBRSxDQUFDO3FCQUNULENBQUMsQ0FDSDtnQkFMRCxDQUtDLENBQ0YsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQ0g7WUFDSCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBT1AsQ0FBQzs7Z0JBSmdCLE9BQU87Z0JBQ1YsS0FBSztnQkFDSixtQkFBbUI7Z0RBQ2xDLE1BQU0sU0FBQyxXQUFXOztJQWpFckI7UUFEQyxNQUFNLEVBQUU7a0VBOEJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7Z0VBNEJDO0lBN0RDLG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7UUFvRVIsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0FuRVgsbUJBQW1CLENBcUUvQjtJQUFELDBCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FyRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNvbmNhdE1hcCxcbiAgZGVsYXksXG4gIGZpbHRlcixcbiAgbWFwLFxuICBwbHVjayxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2dsb2JhbC1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlbGVjdG9ycyB9IGZyb20gJy4uL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyxcbiAgaW5kZXhPZkZpcnN0T2NjdXJyZW5jZSxcbn0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21wYXJlLWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZUVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICByZW1vdmVEdXBsaWNhdGVkJDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICBwbHVjaygncGF5bG9hZCcpLFxuICAgIHN3aXRjaE1hcCgobWVzc2FnZTogR2xvYmFsTWVzc2FnZSkgPT5cbiAgICAgIG9mKG1lc3NhZ2UudGV4dCkucGlwZShcbiAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICBHbG9iYWxNZXNzYWdlU2VsZWN0b3JzLmdldEdsb2JhbE1lc3NhZ2VFbnRpdGllc0J5VHlwZShcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnR5cGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChbdGV4dCwgbWVzc2FnZXNdOiBbVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVbXV0pID0+XG4gICAgICAgICAgICBjb3VudE9mRGVlcEVxdWFsT2JqZWN0cyh0ZXh0LCBtZXNzYWdlcykgPiAxXG4gICAgICAgICksXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoW3RleHQsIG1lc3NhZ2VzXTogW1RyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlW11dKSA9PlxuICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXG4gICAgICAgICAgICAgIGluZGV4OiBpbmRleE9mRmlyc3RPY2N1cnJlbmNlKHRleHQsIG1lc3NhZ2VzKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxcbiAgICBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlXG4gID4gPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpIC8vIHdlIGRvbid0IHdhbnQgdG8gcnVuIHRoaXMgbG9naWMgd2hlbiBkb2luZyBTU1JcbiAgICA/IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFKSxcbiAgICAgICAgcGx1Y2soJ3BheWxvYWQnLCAndHlwZScpLFxuICAgICAgICBjb25jYXRNYXAoKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcuZ2xvYmFsTWVzc2FnZXNbdHlwZV07XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgIHNlbGVjdChHbG9iYWxNZXNzYWdlU2VsZWN0b3JzLmdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSh0eXBlKSksXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgICAoY291bnQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgICBjb25maWcgJiYgY29uZmlnLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJiBjb3VudCAmJiBjb3VudCA+IDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkZWxheShjb25maWcudGltZW91dCksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIDogRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPixcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTWVzc2FnZUNvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueVxuICApIHt9XG59XG4iXX0=
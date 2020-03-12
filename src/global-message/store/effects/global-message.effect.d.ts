import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { StateWithGlobalMessage } from '../global-message-state';
import * as ɵngcc0 from '@angular/core';
export declare class GlobalMessageEffect {
    private actions$;
    private store;
    private config;
    private platformId;
    removeDuplicated$: Observable<GlobalMessageActions.RemoveMessage>;
    hideAfterDelay$: Observable<GlobalMessageActions.RemoveMessage>;
    constructor(actions$: Actions, store: Store<StateWithGlobalMessage>, config: GlobalMessageConfig, platformId: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobalMessageEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GlobalMessageEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImdsb2JhbC1tZXNzYWdlLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbG9iYWxNZXNzYWdlRWZmZWN0IHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc3RvcmU7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUlkO1xuICAgIHJlbW92ZUR1cGxpY2F0ZWQkOiBPYnNlcnZhYmxlPEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJlbW92ZU1lc3NhZ2U+O1xuICAgIGhpZGVBZnRlckRlbGF5JDogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2U+LCBjb25maWc6IEdsb2JhbE1lc3NhZ2VDb25maWcsIHBsYXRmb3JtSWQ6IGFueSk7XG59XG4iXX0=
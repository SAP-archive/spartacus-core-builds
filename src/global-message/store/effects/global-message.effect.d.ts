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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImdsb2JhbC1tZXNzYWdlLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZ2xvYmFsLW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xvYmFsTWVzc2FnZUVmZmVjdCB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHN0b3JlO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICByZW1vdmVEdXBsaWNhdGVkJDogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlPjtcbiAgICBoaWRlQWZ0ZXJEZWxheSQ6IE9ic2VydmFibGU8R2xvYmFsTWVzc2FnZUFjdGlvbnMuUmVtb3ZlTWVzc2FnZT47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlPiwgY29uZmlnOiBHbG9iYWxNZXNzYWdlQ29uZmlnLCBwbGF0Zm9ybUlkOiBhbnkpO1xufVxuIl19
import { Action } from '@ngrx/store';
import { AsmUi } from '../../models/asm.models';
export declare const ASM_UI_UPDATE = "[Asm] UI Update";
export declare class AsmUiUpdate implements Action {
    payload: AsmUi;
    readonly type = "[Asm] UI Update";
    constructor(payload: AsmUi);
}
export declare type AsmUiAction = AsmUiUpdate;

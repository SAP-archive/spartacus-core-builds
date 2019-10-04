import { MemoizedSelector } from '@ngrx/store';
import { AsmUi } from '../../models/asm.models';
import { StateWithAsm } from '../asm-state';
export declare const getAsmUi: MemoizedSelector<StateWithAsm, AsmUi>;

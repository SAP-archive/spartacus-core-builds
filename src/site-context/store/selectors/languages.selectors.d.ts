import { MemoizedSelector } from '@ngrx/store';
import { StateWithSiteContext, LanguagesState, LanguagesEntities } from '../state';
import { Language } from '../../../model/misc.model';
export declare const getLanguagesState: MemoizedSelector<StateWithSiteContext, LanguagesState>;
export declare const getLanguagesEntities: MemoizedSelector<StateWithSiteContext, LanguagesEntities>;
export declare const getActiveLanguage: MemoizedSelector<StateWithSiteContext, string>;
export declare const getAllLanguages: MemoizedSelector<StateWithSiteContext, Language[]>;

import { MemoizedSelector } from '@ngrx/store';
import { Language } from '../../../occ/occ-models/occ.models';
import { StateWithSiteContext, LanguagesState, LanguagesEntities } from '../state';
export declare const getLanguagesState: MemoizedSelector<StateWithSiteContext, LanguagesState>;
export declare const getLanguagesEntities: MemoizedSelector<StateWithSiteContext, LanguagesEntities>;
export declare const getActiveLanguage: MemoizedSelector<StateWithSiteContext, string>;
export declare const getAllLanguages: MemoizedSelector<StateWithSiteContext, Language[]>;

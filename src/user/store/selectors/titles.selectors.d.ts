import { MemoizedSelector } from '@ngrx/store';
import { TitlesState, StateWithUser, TitleEntities } from '../user-state';
import { Title } from '../../../occ/occ-models/index';
export declare const getTitlesState: MemoizedSelector<StateWithUser, TitlesState>;
export declare const getTitlesEntites: MemoizedSelector<StateWithUser, TitleEntities>;
export declare const getAllTitles: MemoizedSelector<StateWithUser, Title[]>;
export declare const titleSelectorFactory: (code: string) => MemoizedSelector<StateWithUser, Title>;

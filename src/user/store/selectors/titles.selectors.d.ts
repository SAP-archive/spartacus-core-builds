import { MemoizedSelector } from '@ngrx/store';
import { Title } from '../../../model/misc.model';
import { StateWithUser, TitleEntities, TitlesState } from '../user-state';
export declare const getTitlesState: MemoizedSelector<StateWithUser, TitlesState>;
export declare const getTitlesEntites: MemoizedSelector<StateWithUser, TitleEntities>;
export declare const getAllTitles: MemoizedSelector<StateWithUser, Title[]>;
export declare const titleSelectorFactory: (code: string) => MemoizedSelector<StateWithUser, Title>;

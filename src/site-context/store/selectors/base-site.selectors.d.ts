import { MemoizedSelector } from '@ngrx/store';
import { BaseSite } from '../../../model/misc.model';
import { StateWithSiteContext } from '../state';
export declare const getActiveBaseSite: MemoizedSelector<StateWithSiteContext, string>;
export declare const getBaseSiteData: MemoizedSelector<StateWithSiteContext, BaseSite>;

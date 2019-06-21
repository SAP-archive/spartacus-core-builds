import { MemoizedSelector } from '@ngrx/store';
import { StateWithSiteContext } from '../state';
import { BaseSite } from '../../../model/misc.model';
export declare const getActiveBaseSite: MemoizedSelector<StateWithSiteContext, string>;
export declare const getBaseSiteData: MemoizedSelector<StateWithSiteContext, BaseSite>;

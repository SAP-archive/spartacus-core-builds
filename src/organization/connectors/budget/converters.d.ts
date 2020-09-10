import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Budget } from '../../../model/budget.model';
import { EntitiesModel } from '../../../model/misc.model';
export declare const BUDGET_NORMALIZER: InjectionToken<Converter<any, Budget>>;
export declare const BUDGETS_NORMALIZER: InjectionToken<Converter<any, EntitiesModel<Budget>>>;

import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromOrderDetailsAction from '../actions/order-details.action';
import { OccOrderService } from '../../occ/index';
import { ConverterService } from '../../../util/converter.service';
export declare class OrderDetailsEffect {
    private actions$;
    private occOrderService;
    private converter;
    loadOrderDetails$: Observable<fromOrderDetailsAction.OrderDetailsAction>;
    constructor(actions$: Actions, occOrderService: OccOrderService, converter: ConverterService);
}

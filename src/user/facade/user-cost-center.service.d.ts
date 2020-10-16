import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Address } from '../../model/address.model';
import { CostCenter } from '../../model/org-unit.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserCostCenterService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
    /**
     * Load all visible active cost centers for the currently login user
     */
    loadActiveCostCenters(): void;
    private getCostCentersState;
    /**
     * Get all visible active cost centers
     */
    getActiveCostCenters(): Observable<CostCenter[]>;
    /**
     * Get the addresses of the cost center's unit based on cost center id
     * @param costCenterId cost center id
     */
    getCostCenterAddresses(costCenterId: string): Observable<Address[]>;
}

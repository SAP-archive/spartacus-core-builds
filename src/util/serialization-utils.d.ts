import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorModel } from '../model/misc.model';
export declare function makeHttpErrorSerializable(error: HttpErrorResponse | any): HttpErrorModel;

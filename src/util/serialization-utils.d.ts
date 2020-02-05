import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel, HttpErrorModel } from '../model/misc.model';
export declare const UNKNOWN_ERROR: {
    error: string;
};
export declare function makeErrorSerializable(error: HttpErrorResponse | ErrorModel | any): HttpErrorModel | Error | any;

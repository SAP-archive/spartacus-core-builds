import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel, HttpErrorModel } from '../model/misc.model';
/**
 * @deprecated since 2.1, use normalizeHttpError instead
 */
export declare const UNKNOWN_ERROR: {
    error: string;
};
/**
 * @deprecated since 2.1, use normalizeHttpError instead
 */
export declare function makeErrorSerializable(error: HttpErrorResponse | ErrorModel | any): HttpErrorModel | Error | any;

import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel, HttpErrorModel } from '../model/misc.model';
import { PageContext } from '../routing/models/page-context.model';
export declare const CURRENT_CONTEXT_KEY = "current";
export declare const UNKNOWN_ERROR: {
    error: string;
};
export declare function makeErrorSerializable(error: HttpErrorResponse | ErrorModel | any): HttpErrorModel | Error | any;
export declare function serializePageContext(pageContext: PageContext): string;

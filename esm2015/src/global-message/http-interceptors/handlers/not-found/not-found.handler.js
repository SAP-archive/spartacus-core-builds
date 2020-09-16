import { Injectable } from '@angular/core';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
export class NotFoundHandler extends HttpErrorHandler {
    constructor() {
        super(...arguments);
        this.responseStatus = HttpResponseStatus.NOT_FOUND;
    }
    // empty error handler to avoid we fallabck to the unknown error handler
    handleError() { }
    getPriority() {
        return -10 /* LOW */;
    }
}
NotFoundHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotFoundHandler_Factory() { return new NotFoundHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: NotFoundHandler, providedIn: "root" });
NotFoundHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9oYW5kbGVycy9ub3QtZm91bmQvbm90LWZvdW5kLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBTXpELE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUhyRDs7UUFJRSxtQkFBYyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztLQVEvQztJQU5DLHdFQUF3RTtJQUN4RSxXQUFXLEtBQVUsQ0FBQztJQUV0QixXQUFXO1FBQ1QscUJBQW9CO0lBQ3RCLENBQUM7Ozs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVzcG9uc2Utc3RhdHVzLm1vZGVsJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FwcGxpY2FibGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLk5PVF9GT1VORDtcblxuICAvLyBlbXB0eSBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHdlIGZhbGxhYmNrIHRvIHRoZSB1bmtub3duIGVycm9yIGhhbmRsZXJcbiAgaGFuZGxlRXJyb3IoKTogdm9pZCB7fVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cbn1cbiJdfQ==
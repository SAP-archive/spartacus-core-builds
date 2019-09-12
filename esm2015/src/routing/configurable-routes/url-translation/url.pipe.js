/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
export class UrlPipe {
    /**
     * @param {?} urlService
     */
    constructor(urlService) {
        this.urlService = urlService;
    }
    /**
     * @param {?} commands
     * @return {?}
     */
    transform(commands) {
        return this.urlService.transform(commands);
    }
}
UrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxUrl',
            },] }
];
/** @nocollapse */
UrlPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlPipe.prototype.urlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNOUQsTUFBTSxPQUFPLE9BQU87Ozs7SUFDbEIsWUFBb0IsVUFBK0I7UUFBL0IsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7SUFBRyxDQUFDOzs7OztJQUV2RCxTQUFTLENBQUMsUUFBcUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFSRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZDs7OztZQUxRLG1CQUFtQjs7Ozs7OztJQU9kLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFVybCcsXG59KVxuZXhwb3J0IGNsYXNzIFVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS50cmFuc2Zvcm0oY29tbWFuZHMpO1xuICB9XG59XG4iXX0=
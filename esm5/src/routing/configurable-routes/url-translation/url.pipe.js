import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
var UrlPipe = /** @class */ (function () {
    function UrlPipe(urlService) {
        this.urlService = urlService;
    }
    UrlPipe.prototype.transform = function (commands) {
        return this.urlService.transform(commands);
    };
    UrlPipe.ctorParameters = function () { return [
        { type: SemanticPathService }
    ]; };
    UrlPipe = __decorate([
        Pipe({
            name: 'cxUrl',
        })
    ], UrlPipe);
    return UrlPipe;
}());
export { UrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNOUQ7SUFDRSxpQkFBb0IsVUFBK0I7UUFBL0IsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7SUFBRyxDQUFDO0lBRXZELDJCQUFTLEdBQVQsVUFBVSxRQUFxQjtRQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQUorQixtQkFBbUI7O0lBRHhDLE9BQU87UUFIbkIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO09BQ1csT0FBTyxDQU1uQjtJQUFELGNBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4vc2VtYW50aWMtcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVybENvbW1hbmRzIH0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N4VXJsJyxcbn0pXG5leHBvcnQgY2xhc3MgVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy51cmxTZXJ2aWNlLnRyYW5zZm9ybShjb21tYW5kcyk7XG4gIH1cbn1cbiJdfQ==
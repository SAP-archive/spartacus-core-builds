import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
let UrlPipe = class UrlPipe {
    constructor(urlService) {
        this.urlService = urlService;
    }
    transform(commands) {
        return this.urlService.transform(commands);
    }
};
UrlPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
UrlPipe = __decorate([
    Pipe({
        name: 'cxUrl',
    })
], UrlPipe);
export { UrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNOUQsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztJQUNsQixZQUFvQixVQUErQjtRQUEvQixlQUFVLEdBQVYsVUFBVSxDQUFxQjtJQUFHLENBQUM7SUFFdkQsU0FBUyxDQUFDLFFBQXFCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7O1lBTGlDLG1CQUFtQjs7QUFEeEMsT0FBTztJQUhuQixJQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsT0FBTztLQUNkLENBQUM7R0FDVyxPQUFPLENBTW5CO1NBTlksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFVybCcsXG59KVxuZXhwb3J0IGNsYXNzIFVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS50cmFuc2Zvcm0oY29tbWFuZHMpO1xuICB9XG59XG4iXX0=
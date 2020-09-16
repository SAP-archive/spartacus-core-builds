import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
export class UrlPipe {
    constructor(urlService) {
        this.urlService = urlService;
    }
    transform(commands) {
        return this.urlService.transform(commands);
    }
}
UrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxUrl',
            },] }
];
UrlPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTTlELE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFlBQW9CLFVBQStCO1FBQS9CLGVBQVUsR0FBVixVQUFVLENBQXFCO0lBQUcsQ0FBQztJQUV2RCxTQUFTLENBQUMsUUFBcUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFSRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZDs7O1lBTFEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4vc2VtYW50aWMtcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVybENvbW1hbmRzIH0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N4VXJsJyxcbn0pXG5leHBvcnQgY2xhc3MgVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy51cmxTZXJ2aWNlLnRyYW5zZm9ybShjb21tYW5kcyk7XG4gIH1cbn1cbiJdfQ==
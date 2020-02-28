import { PipeTransform } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
import { UrlCommands } from './url-command';
import * as ɵngcc0 from '@angular/core';
export declare class UrlPipe implements PipeTransform {
    private urlService;
    constructor(urlService: SemanticPathService);
    transform(commands: UrlCommands): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UrlPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<UrlPipe, "cxUrl">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuZC50cyIsInNvdXJjZXMiOlsidXJsLnBpcGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFJQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuL3VybC1jb21tYW5kJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHVybFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IodXJsU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSk7XG4gICAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcyk6IGFueVtdO1xufVxuIl19
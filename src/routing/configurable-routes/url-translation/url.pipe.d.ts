import { PipeTransform } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
import { UrlCommands } from './url-command';
import * as ɵngcc0 from '@angular/core';
export declare class UrlPipe implements PipeTransform {
    private urlService;
    constructor(urlService: SemanticPathService);
    transform(commands: UrlCommands): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UrlPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<UrlPipe, "cxUrl">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuZC50cyIsInNvdXJjZXMiOlsidXJsLnBpcGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgdXJsU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcih1cmxTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKTtcbiAgICB0cmFuc2Zvcm0oY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W107XG59XG4iXX0=
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

//# sourceMappingURL=url.pipe.d.ts.map
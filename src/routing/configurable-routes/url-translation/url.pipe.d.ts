import { PipeTransform } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
import { UrlCommands } from './url-command';
export declare class UrlPipe implements PipeTransform {
    private urlService;
    constructor(urlService: SemanticPathService);
    transform(commands: UrlCommands): any[];
}

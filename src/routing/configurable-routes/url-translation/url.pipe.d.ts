import { PipeTransform } from '@angular/core';
import { UrlService } from './url.service';
import { UrlCommands } from './url-command';
export declare class UrlPipe implements PipeTransform {
    private urlService;
    constructor(urlService: UrlService);
    transform(commands: UrlCommands): any[];
}

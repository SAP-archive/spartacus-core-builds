import { Router } from '@angular/router';
export declare class UrlParsingService {
    private router;
    constructor(router: Router);
    getPrimarySegments(url: string): string[];
    private _getPrimarySegmentsFromUrlTree;
}

import { PageType } from '../../model/cms.model';
export declare class PageContext {
    id: string;
    type?: PageType;
    constructor(id: string, type?: PageType);
}

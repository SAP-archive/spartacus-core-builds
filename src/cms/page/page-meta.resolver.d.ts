import { PageType } from '../../model/cms.model';
import { Page } from '../model/page.model';
import { Handler } from '../../util/handler';
/**
 * Abstract class that can be used to resolve meta data for specific pages.
 * The `getScore` method is used to select the right resolver for a specific
 * page, based on a score. The score is calculated by the (non)matching page
 * type and page template.
 */
export declare abstract class PageMetaResolver implements Handler {
    /** The `PageType` is used to score the (non)matching page */
    pageType: PageType;
    /** The page template is used to score the (non)matching page template */
    pageTemplate: string;
    /**
     * Returns the matching score for a resolver class, based on
     * the page type and page template.
     */
    getScore(page: Page): number;
    hasMatch(page: Page): boolean;
    getPriority(page: Page): number;
}

import { Observable } from 'rxjs';
import { BreadcrumbMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { TranslationService } from '../../i18n/translation.service';
import { Product } from '../../model/product.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageBreadcrumbResolver, PageImageResolver, PageRobotsResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    protected translation: TranslationService;
    protected basePageMetaResolver?: BasePageMetaResolver;
    protected product$: Observable<unknown>;
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions
     */
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService);
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService, basePageMetaResolver?: BasePageMetaResolver);
    /**
     * Resolves the page heading for the Product Detail Page.
     * The page heading is used in the UI (`<h1>`), where as the page
     * title is used by the browser and crawlers.
     */
    resolveHeading(): Observable<string>;
    /**
     * Resolves the page title for the Product Detail Page. The page title
     * is resolved with the product name, the first category and the manufacturer.
     * The page title used by the browser (history, tabs) and crawlers.
     */
    resolveTitle(): Observable<string>;
    /**
     * Resolves the page description for the Product Detail Page. The description
     * is based on the `product.summary`.
     */
    resolveDescription(): Observable<string>;
    /**
     * Resolves breadcrumbs for the Product Detail Page. The breadcrumbs are driven by
     * a static home page crumb and a crumb for each category.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    /**
     * Resolves the main page image for the Product Detail Page. The product image
     * is based on the PRIMARY product image. The zoom format is used by default.
     */
    resolveImage(): Observable<string>;
    protected resolveFirstCategory(product: Product): string;
    protected resolveManufacturer(product: Product): string;
    /**
     * Resolves the robot information for the Product Detail Page. The
     * robot instruction defaults to FOLLOW and INDEX for all product pages,
     * regardless of whether they're purchasable or not.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
}

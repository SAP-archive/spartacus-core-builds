import { Observable } from 'rxjs';
import { PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageBreadcrumbResolver, PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { Product } from '../../model/product.model';
import { TranslationService } from '../../i18n/translation.service';
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageBreadcrumbResolver, PageImageResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    protected translation: TranslationService;
    constructor(routingService: RoutingService, productService: ProductService, translation: TranslationService);
    resolve(): Observable<PageMeta>;
    resolveHeading(product: Product): Observable<string>;
    resolveTitle(product: Product): Observable<string>;
    resolveDescription(product: Product): Observable<string>;
    resolveBreadcrumbs(product: Product): Observable<any[]>;
    resolveImage(product: any): Observable<string>;
    private resolveFirstCategory;
    private resolveManufacturer;
}

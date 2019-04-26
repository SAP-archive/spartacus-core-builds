import { Observable } from 'rxjs';
import { PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { UIProduct } from '../model/product';
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageImageResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    constructor(routingService: RoutingService, productService: ProductService);
    resolve(): Observable<PageMeta>;
    resolveHeading(product: UIProduct): Observable<string>;
    resolveTitle(product: UIProduct): Observable<string>;
    resolveDescription(product: UIProduct): Observable<string>;
    resolveImage(product: any): Observable<string>;
    private resolveFirstCategory;
    private resolveManufacturer;
}

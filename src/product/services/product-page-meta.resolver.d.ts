import { Observable } from 'rxjs';
import { PageMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageDescriptionResolver, PageHeadingResolver, PageImageResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { Product } from '../../occ/occ-models/occ.models';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
export declare class ProductPageMetaResolver extends PageMetaResolver implements PageHeadingResolver, PageTitleResolver, PageDescriptionResolver, PageImageResolver {
    protected routingService: RoutingService;
    protected productService: ProductService;
    constructor(routingService: RoutingService, productService: ProductService);
    resolve(): Observable<PageMeta>;
    resolveHeading(product: Product): string;
    resolveTitle(product: Product): string;
    resolveDescription(product: Product): string;
    resolveImage(product: any): string;
    private resolveFirstCategory;
    private resolveManufactorer;
}

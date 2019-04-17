import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { Product } from '../../occ/occ-models/occ.models';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageMeta } from '../../cms/model/page.model';
import { PageTitleResolver, PageDescriptionResolver, PageHeadingResolver, PageImageResolver } from '../../cms/page/page.resolvers';
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

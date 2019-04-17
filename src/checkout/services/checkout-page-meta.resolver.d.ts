import { Observable } from 'rxjs';
import { RoutingService } from '../../routing/facade/routing.service';
import { CartService } from '../../cart/facade/cart.service';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageTitleResolver, PageRobotsResolver } from '../../cms/page/page.resolvers';
import { PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { Cart } from '../../occ/occ-models/index';
export declare class CheckoutPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected routingService: RoutingService;
    protected cartService: CartService;
    constructor(routingService: RoutingService, cartService: CartService);
    resolve(): Observable<PageMeta>;
    resolveTitle(cart: Cart): string;
    resolveRobots(): PageRobotsMeta[];
}

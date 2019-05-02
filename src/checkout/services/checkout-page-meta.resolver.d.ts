import { Observable } from 'rxjs';
import { CartService } from '../../cart/facade/cart.service';
import { UICart } from '../../cart/model';
import { PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
export declare class CheckoutPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cartService: CartService;
    constructor(cartService: CartService);
    resolve(): Observable<PageMeta>;
    resolveTitle(cart: UICart): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
}

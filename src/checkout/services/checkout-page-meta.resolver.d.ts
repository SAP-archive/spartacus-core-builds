import { Observable } from 'rxjs';
import { CartService } from '../../cart/facade/cart.service';
import { PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
import { Cart } from '../../model/cart.model';
export declare class CheckoutPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cartService: CartService;
    constructor(cartService: CartService);
    resolve(): Observable<PageMeta>;
    resolveTitle(cart: Cart): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
}

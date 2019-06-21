import { AuthService } from '../auth/index';
import { CmsService } from '../cms/index';
import { RoutingService } from '../routing/index';
import { LanguageService, CurrencyService } from '../site-context/index';
import { ProductService, ProductSearchService, ProductReviewService } from '../product/index';
import { UserService } from '../user/index';
import { TranslationService } from '../i18n/index';
export declare class CxApiService {
    auth: AuthService;
    cms: CmsService;
    routing: RoutingService;
    currency: CurrencyService;
    language: LanguageService;
    product: ProductService;
    productSearch: ProductSearchService;
    productReview: ProductReviewService;
    user: UserService;
    translation: TranslationService;
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, currency: CurrencyService, language: LanguageService, product: ProductService, productSearch: ProductSearchService, productReview: ProductReviewService, user: UserService, translation: TranslationService);
}

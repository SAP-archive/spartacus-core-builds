import { Observable } from 'rxjs';
import { PersonalizationConfig } from '../config/personalization-config';
import { PersonalizationContext } from '../model/personalization-context.model';
import { CmsService } from '../../cms/facade/cms.service';
import * as ɵngcc0 from '@angular/core';
export declare class PersonalizationContextService {
    protected config: PersonalizationConfig;
    protected cmsService: CmsService;
    constructor(config: PersonalizationConfig, cmsService: CmsService);
    getPersonalizationContext(): Observable<PersonalizationContext>;
    private buildPersonalizationContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PersonalizationContextService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwZXJzb25hbGl6YXRpb24tY29udGV4dC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbnRleHQgfSBmcm9tICcuLi9tb2RlbC9wZXJzb25hbGl6YXRpb24tY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQZXJzb25hbGl6YXRpb25Db250ZXh0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlKTtcbiAgICBnZXRQZXJzb25hbGl6YXRpb25Db250ZXh0KCk6IE9ic2VydmFibGU8UGVyc29uYWxpemF0aW9uQ29udGV4dD47XG4gICAgcHJpdmF0ZSBidWlsZFBlcnNvbmFsaXphdGlvbkNvbnRleHQ7XG59XG4iXX0=
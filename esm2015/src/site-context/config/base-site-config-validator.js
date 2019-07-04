/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getContextParameterDefault } from './context-config-utils';
import { BASE_SITE_CONTEXT_ID } from '../providers/context-ids';
/**
 * @param {?} config
 * @return {?}
 */
export function baseSiteConfigValidator(config) {
    if (getContextParameterDefault(config, BASE_SITE_CONTEXT_ID) === undefined) {
        return 'Please configure context.parameters.baseSite before using storefront library!';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLWNvbmZpZy12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2NvbmZpZy9iYXNlLXNpdGUtY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRWhFLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxNQUF5QjtJQUMvRCxJQUFJLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUMxRSxPQUFPLCtFQUErRSxDQUFDO0tBQ3hGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvcihjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnKSB7XG4gIGlmIChnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdChjb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdQbGVhc2UgY29uZmlndXJlIGNvbnRleHQucGFyYW1ldGVycy5iYXNlU2l0ZSBiZWZvcmUgdXNpbmcgc3RvcmVmcm9udCBsaWJyYXJ5ISc7XG4gIH1cbn1cbiJdfQ==
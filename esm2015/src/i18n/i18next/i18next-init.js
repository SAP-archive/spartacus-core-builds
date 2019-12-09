/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
/**
 * @param {?} configInit
 * @param {?} languageService
 * @return {?}
 */
export function i18nextInit(configInit, languageService) {
    return (/**
     * @return {?}
     */
    () => configInit.getStableConfig('i18n').then((/**
     * @param {?} config
     * @return {?}
     */
    config => {
        /** @type {?} */
        let i18nextConfig = {
            ns: [],
            // don't preload any namespaces
            fallbackLng: config.i18n.fallbackLang,
            debug: config.i18n.debug,
            interpolation: {
                escapeValue: false,
            },
        };
        if (config.i18n.backend) {
            i18next.use(i18nextXhrBackend);
            i18nextConfig = Object.assign({}, i18nextConfig, { backend: config.i18n.backend });
        }
        return i18next.init(i18nextConfig, (/**
         * @return {?}
         */
        () => {
            // Don't use i18next's 'resources' config key for adding static translations,
            // because it will disable loading chunks from backend. We add resources here, in the init's callback.
            i18nextAddTranslations(config.i18n.resources);
            syncI18nextWithSiteContext(languageService);
        }));
    })));
}
/**
 * @param {?=} resources
 * @return {?}
 */
export function i18nextAddTranslations(resources = {}) {
    Object.keys(resources).forEach((/**
     * @param {?} lang
     * @return {?}
     */
    lang => {
        Object.keys(resources[lang]).forEach((/**
         * @param {?} chunkName
         * @return {?}
         */
        chunkName => {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        }));
    }));
}
/**
 * @param {?} language
 * @return {?}
 */
export function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe((/**
     * @param {?} lang
     * @return {?}
     */
    lang => i18next.changeLanguage(lang)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFLcEQsTUFBTSxVQUFVLFdBQVcsQ0FDekIsVUFBb0MsRUFDcEMsZUFBZ0M7SUFFaEM7OztJQUFPLEdBQUcsRUFBRSxDQUNWLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTs7OztJQUFDLE1BQU0sQ0FBQyxFQUFFOztZQUMzQyxhQUFhLEdBQXdCO1lBQ3ZDLEVBQUUsRUFBRSxFQUFFOztZQUNOLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLGFBQWEscUJBQVEsYUFBYSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRSxDQUFDO1NBQ3BFO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWE7OztRQUFFLEdBQUcsRUFBRTtZQUN0Qyw2RUFBNkU7WUFDN0Usc0dBQXNHO1lBQ3RHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUMsRUFBQztBQUNQLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFlBQWtDLEVBQUU7SUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxDQUFDLGlCQUFpQixDQUN2QixJQUFJLEVBQ0osU0FBUyxFQUNULFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDMUIsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQXlCO0lBQ2xFLHNFQUFzRTtJQUN0RSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUzs7OztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlXG4pOiAoKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnaTE4bicpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGxldCBpMThuZXh0Q29uZmlnOiBpMThuZXh0LkluaXRPcHRpb25zID0ge1xuICAgICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgICAgZGVidWc6IGNvbmZpZy5pMThuLmRlYnVnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICAgIGkxOG5leHQudXNlKGkxOG5leHRYaHJCYWNrZW5kKTtcbiAgICAgICAgaTE4bmV4dENvbmZpZyA9IHsgLi4uaTE4bmV4dENvbmZpZywgYmFja2VuZDogY29uZmlnLmkxOG4uYmFja2VuZCB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaTE4bmV4dC5pbml0KGkxOG5leHRDb25maWcsICgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgdXNlIGkxOG5leHQncyAncmVzb3VyY2VzJyBjb25maWcga2V5IGZvciBhZGRpbmcgc3RhdGljIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgLy8gYmVjYXVzZSBpdCB3aWxsIGRpc2FibGUgbG9hZGluZyBjaHVua3MgZnJvbSBiYWNrZW5kLiBXZSBhZGQgcmVzb3VyY2VzIGhlcmUsIGluIHRoZSBpbml0J3MgY2FsbGJhY2suXG4gICAgICAgIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMoY29uZmlnLmkxOG4ucmVzb3VyY2VzKTtcbiAgICAgICAgc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhyZXNvdXJjZXM6IFRyYW5zbGF0aW9uUmVzb3VyY2VzID0ge30pIHtcbiAgT2JqZWN0LmtleXMocmVzb3VyY2VzKS5mb3JFYWNoKGxhbmcgPT4ge1xuICAgIE9iamVjdC5rZXlzKHJlc291cmNlc1tsYW5nXSkuZm9yRWFjaChjaHVua05hbWUgPT4ge1xuICAgICAgaTE4bmV4dC5hZGRSZXNvdXJjZUJ1bmRsZShcbiAgICAgICAgbGFuZyxcbiAgICAgICAgY2h1bmtOYW1lLFxuICAgICAgICByZXNvdXJjZXNbbGFuZ11bY2h1bmtOYW1lXSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIC8vIGFsd2F5cyB1cGRhdGUgbGFuZ3VhZ2Ugb2YgaTE4bmV4dCBvbiBzaXRlIGNvbnRleHQgKGxhbmd1YWdlKSBjaGFuZ2VcbiAgbGFuZ3VhZ2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKGxhbmcgPT4gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZShsYW5nKSk7XG59XG4iXX0=
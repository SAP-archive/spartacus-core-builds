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
    () => configInit.getStableConfig('i18n.fallbackLang').then((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFLcEQsTUFBTSxVQUFVLFdBQVcsQ0FDekIsVUFBb0MsRUFDcEMsZUFBZ0M7SUFFaEM7OztJQUFPLEdBQUcsRUFBRSxDQUNWLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUU7O1lBQ3hELGFBQWEsR0FBd0I7WUFDdkMsRUFBRSxFQUFFLEVBQUU7O1lBQ04sV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3hCLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsS0FBSzthQUNuQjtTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsYUFBYSxxQkFBUSxhQUFhLElBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFFLENBQUM7U0FDcEU7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTs7O1FBQUUsR0FBRyxFQUFFO1lBQ3RDLDZFQUE2RTtZQUM3RSxzR0FBc0c7WUFDdEcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxFQUFDO0FBQ1AsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsWUFBa0MsRUFBRTtJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxJQUFJLENBQUMsRUFBRTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUMvQyxPQUFPLENBQUMsaUJBQWlCLENBQ3ZCLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBeUI7SUFDbEUsc0VBQXNFO0lBQ3RFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IGkxOG5leHRYaHJCYWNrZW5kIGZyb20gJ2kxOG5leHQteGhyLWJhY2tlbmQnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25SZXNvdXJjZXMgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1yZXNvdXJjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEluaXQoXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2Vcbik6ICgpID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdpMThuLmZhbGxiYWNrTGFuZycpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGxldCBpMThuZXh0Q29uZmlnOiBpMThuZXh0LkluaXRPcHRpb25zID0ge1xuICAgICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgICAgZGVidWc6IGNvbmZpZy5pMThuLmRlYnVnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICAgIGkxOG5leHQudXNlKGkxOG5leHRYaHJCYWNrZW5kKTtcbiAgICAgICAgaTE4bmV4dENvbmZpZyA9IHsgLi4uaTE4bmV4dENvbmZpZywgYmFja2VuZDogY29uZmlnLmkxOG4uYmFja2VuZCB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaTE4bmV4dC5pbml0KGkxOG5leHRDb25maWcsICgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgdXNlIGkxOG5leHQncyAncmVzb3VyY2VzJyBjb25maWcga2V5IGZvciBhZGRpbmcgc3RhdGljIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgLy8gYmVjYXVzZSBpdCB3aWxsIGRpc2FibGUgbG9hZGluZyBjaHVua3MgZnJvbSBiYWNrZW5kLiBXZSBhZGQgcmVzb3VyY2VzIGhlcmUsIGluIHRoZSBpbml0J3MgY2FsbGJhY2suXG4gICAgICAgIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMoY29uZmlnLmkxOG4ucmVzb3VyY2VzKTtcbiAgICAgICAgc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhyZXNvdXJjZXM6IFRyYW5zbGF0aW9uUmVzb3VyY2VzID0ge30pIHtcbiAgT2JqZWN0LmtleXMocmVzb3VyY2VzKS5mb3JFYWNoKGxhbmcgPT4ge1xuICAgIE9iamVjdC5rZXlzKHJlc291cmNlc1tsYW5nXSkuZm9yRWFjaChjaHVua05hbWUgPT4ge1xuICAgICAgaTE4bmV4dC5hZGRSZXNvdXJjZUJ1bmRsZShcbiAgICAgICAgbGFuZyxcbiAgICAgICAgY2h1bmtOYW1lLFxuICAgICAgICByZXNvdXJjZXNbbGFuZ11bY2h1bmtOYW1lXSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIC8vIGFsd2F5cyB1cGRhdGUgbGFuZ3VhZ2Ugb2YgaTE4bmV4dCBvbiBzaXRlIGNvbnRleHQgKGxhbmd1YWdlKSBjaGFuZ2VcbiAgbGFuZ3VhZ2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKGxhbmcgPT4gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZShsYW5nKSk7XG59XG4iXX0=
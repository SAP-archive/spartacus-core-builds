/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    function () {
        return configInit.getStableConfig('i18n').then((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var i18nextConfig = {
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
                i18nextConfig = tslib_1.__assign({}, i18nextConfig, { backend: config.i18n.backend });
            }
            return i18next.init(i18nextConfig, (/**
             * @return {?}
             */
            function () {
                // Don't use i18next's 'resources' config key for adding static translations,
                // because it will disable loading chunks from backend. We add resources here, in the init's callback.
                i18nextAddTranslations(config.i18n.resources);
                syncI18nextWithSiteContext(languageService);
            }));
        }));
    });
}
/**
 * @param {?=} resources
 * @return {?}
 */
export function i18nextAddTranslations(resources) {
    if (resources === void 0) { resources = {}; }
    Object.keys(resources).forEach((/**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        Object.keys(resources[lang]).forEach((/**
         * @param {?} chunkName
         * @return {?}
         */
        function (chunkName) {
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
    function (lang) { return i18next.changeLanguage(lang); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBS3BELE1BQU0sVUFBVSxXQUFXLENBQ3pCLFVBQW9DLEVBQ3BDLGVBQWdDO0lBRWhDOzs7SUFBTztRQUNMLE9BQUEsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxNQUFNOztnQkFDeEMsYUFBYSxHQUF3QjtnQkFDdkMsRUFBRSxFQUFFLEVBQUU7O2dCQUNOLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3hCLGFBQWEsRUFBRTtvQkFDYixXQUFXLEVBQUUsS0FBSztpQkFDbkI7YUFDRjtZQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsYUFBYSx3QkFBUSxhQUFhLElBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFFLENBQUM7YUFDcEU7WUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYTs7O1lBQUU7Z0JBQ2pDLDZFQUE2RTtnQkFDN0Usc0dBQXNHO2dCQUN0RyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQztJQXBCRixDQW9CRSxFQUFDO0FBQ1AsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsU0FBb0M7SUFBcEMsMEJBQUEsRUFBQSxjQUFvQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLElBQUk7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxTQUFTO1lBQzVDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkIsSUFBSSxFQUNKLFNBQVMsRUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQzFCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUF5QjtJQUNsRSxzRUFBc0U7SUFDdEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztBQUN2RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgaTE4bmV4dFhockJhY2tlbmQgZnJvbSAnaTE4bmV4dC14aHItYmFja2VuZCc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblJlc291cmNlcyB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLXJlc291cmNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0SW5pdChcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuKTogKCkgPT4gUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICgpID0+XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoJ2kxOG4nKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBsZXQgaTE4bmV4dENvbmZpZzogaTE4bmV4dC5Jbml0T3B0aW9ucyA9IHtcbiAgICAgICAgbnM6IFtdLCAvLyBkb24ndCBwcmVsb2FkIGFueSBuYW1lc3BhY2VzXG4gICAgICAgIGZhbGxiYWNrTG5nOiBjb25maWcuaTE4bi5mYWxsYmFja0xhbmcsXG4gICAgICAgIGRlYnVnOiBjb25maWcuaTE4bi5kZWJ1ZyxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBpZiAoY29uZmlnLmkxOG4uYmFja2VuZCkge1xuICAgICAgICBpMThuZXh0LnVzZShpMThuZXh0WGhyQmFja2VuZCk7XG4gICAgICAgIGkxOG5leHRDb25maWcgPSB7IC4uLmkxOG5leHRDb25maWcsIGJhY2tlbmQ6IGNvbmZpZy5pMThuLmJhY2tlbmQgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGkxOG5leHQuaW5pdChpMThuZXh0Q29uZmlnLCAoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVzZSBpMThuZXh0J3MgJ3Jlc291cmNlcycgY29uZmlnIGtleSBmb3IgYWRkaW5nIHN0YXRpYyB0cmFuc2xhdGlvbnMsXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgd2lsbCBkaXNhYmxlIGxvYWRpbmcgY2h1bmtzIGZyb20gYmFja2VuZC4gV2UgYWRkIHJlc291cmNlcyBoZXJlLCBpbiB0aGUgaW5pdCdzIGNhbGxiYWNrLlxuICAgICAgICBpMThuZXh0QWRkVHJhbnNsYXRpb25zKGNvbmZpZy5pMThuLnJlc291cmNlcyk7XG4gICAgICAgIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlU2VydmljZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMocmVzb3VyY2VzOiBUcmFuc2xhdGlvblJlc291cmNlcyA9IHt9KSB7XG4gIE9iamVjdC5rZXlzKHJlc291cmNlcykuZm9yRWFjaChsYW5nID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXNvdXJjZXNbbGFuZ10pLmZvckVhY2goY2h1bmtOYW1lID0+IHtcbiAgICAgIGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUoXG4gICAgICAgIGxhbmcsXG4gICAgICAgIGNodW5rTmFtZSxcbiAgICAgICAgcmVzb3VyY2VzW2xhbmddW2NodW5rTmFtZV0sXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAvLyBhbHdheXMgdXBkYXRlIGxhbmd1YWdlIG9mIGkxOG5leHQgb24gc2l0ZSBjb250ZXh0IChsYW5ndWFnZSkgY2hhbmdlXG4gIGxhbmd1YWdlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShsYW5nID0+IGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobGFuZykpO1xufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
/**
 * @param {?} config
 * @param {?} languageService
 * @return {?}
 */
export function i18nextInit(config, languageService) {
    return (/**
     * @return {?}
     */
    function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBS3BELE1BQU0sVUFBVSxXQUFXLENBQ3pCLE1BQWtCLEVBQ2xCLGVBQWdDO0lBRWhDOzs7SUFBTzs7WUFDRCxhQUFhLEdBQXdCO1lBQ3ZDLEVBQUUsRUFBRSxFQUFFOztZQUNOLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLGFBQWEsd0JBQVEsYUFBYSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRSxDQUFDO1NBQ3BFO1FBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWE7OztRQUFFO1lBQ2pDLDZFQUE2RTtZQUM3RSxzR0FBc0c7WUFDdEcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsY0FBb0M7SUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxJQUFJO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsU0FBUztZQUM1QyxPQUFPLENBQUMsaUJBQWlCLENBQ3ZCLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBeUI7SUFDbEUsc0VBQXNFO0lBQ3RFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IGkxOG5leHRYaHJCYWNrZW5kIGZyb20gJ2kxOG5leHQteGhyLWJhY2tlbmQnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25SZXNvdXJjZXMgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1yZXNvdXJjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEluaXQoXG4gIGNvbmZpZzogSTE4bkNvbmZpZyxcbiAgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2Vcbik6ICgpID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGkxOG5leHRDb25maWc6IGkxOG5leHQuSW5pdE9wdGlvbnMgPSB7XG4gICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgIGZhbGxiYWNrTG5nOiBjb25maWcuaTE4bi5mYWxsYmFja0xhbmcsXG4gICAgICBkZWJ1ZzogY29uZmlnLmkxOG4uZGVidWcsXG4gICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoY29uZmlnLmkxOG4uYmFja2VuZCkge1xuICAgICAgaTE4bmV4dC51c2UoaTE4bmV4dFhockJhY2tlbmQpO1xuICAgICAgaTE4bmV4dENvbmZpZyA9IHsgLi4uaTE4bmV4dENvbmZpZywgYmFja2VuZDogY29uZmlnLmkxOG4uYmFja2VuZCB9O1xuICAgIH1cbiAgICByZXR1cm4gaTE4bmV4dC5pbml0KGkxOG5leHRDb25maWcsICgpID0+IHtcbiAgICAgIC8vIERvbid0IHVzZSBpMThuZXh0J3MgJ3Jlc291cmNlcycgY29uZmlnIGtleSBmb3IgYWRkaW5nIHN0YXRpYyB0cmFuc2xhdGlvbnMsXG4gICAgICAvLyBiZWNhdXNlIGl0IHdpbGwgZGlzYWJsZSBsb2FkaW5nIGNodW5rcyBmcm9tIGJhY2tlbmQuIFdlIGFkZCByZXNvdXJjZXMgaGVyZSwgaW4gdGhlIGluaXQncyBjYWxsYmFjay5cbiAgICAgIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMoY29uZmlnLmkxOG4ucmVzb3VyY2VzKTtcbiAgICAgIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlU2VydmljZSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0QWRkVHJhbnNsYXRpb25zKHJlc291cmNlczogVHJhbnNsYXRpb25SZXNvdXJjZXMgPSB7fSkge1xuICBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgT2JqZWN0LmtleXMocmVzb3VyY2VzW2xhbmddKS5mb3JFYWNoKGNodW5rTmFtZSA9PiB7XG4gICAgICBpMThuZXh0LmFkZFJlc291cmNlQnVuZGxlKFxuICAgICAgICBsYW5nLFxuICAgICAgICBjaHVua05hbWUsXG4gICAgICAgIHJlc291cmNlc1tsYW5nXVtjaHVua05hbWVdLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgLy8gYWx3YXlzIHVwZGF0ZSBsYW5ndWFnZSBvZiBpMThuZXh0IG9uIHNpdGUgY29udGV4dCAobGFuZ3VhZ2UpIGNoYW5nZVxuICBsYW5ndWFnZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUobGFuZyA9PiBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxhbmcpKTtcbn1cbiJdfQ==
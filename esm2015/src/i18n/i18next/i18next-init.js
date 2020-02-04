/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
/**
 * @param {?} configInit
 * @param {?} languageService
 * @param {?} httpClient
 * @param {?} serverRequestOrigin
 * @return {?}
 */
export function i18nextInit(configInit, languageService, httpClient, serverRequestOrigin) {
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
            /** @type {?} */
            const loadPath = getLoadPath(config.i18n.backend.loadPath, serverRequestOrigin);
            /** @type {?} */
            const backend = {
                loadPath,
                ajax: i18nextGetHttpClient(httpClient),
            };
            i18nextConfig = Object.assign({}, i18nextConfig, { backend });
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
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param {?} httpClient Angular http client
 * @return {?}
 */
export function i18nextGetHttpClient(httpClient) {
    return (/**
     * @param {?} url
     * @param {?} _options
     * @param {?} callback
     * @param {?} _data
     * @return {?}
     */
    (url, _options, callback, _data) => {
        httpClient
            .get(url, { responseType: 'text' })
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => callback(data, { status: 200 })), (/**
         * @param {?} error
         * @return {?}
         */
        error => callback(null, { status: error.status })));
    });
}
/**
 * Resolves the relative path to the absolute one in SSR, using the server request's origin.
 * It's needed, because Angular Universal doesn't support relative URLs in HttpClient. See Angular issues:
 * - https://github.com/angular/angular/issues/19224
 * - https://github.com/angular/universal/issues/858
 * @param {?} path
 * @param {?} serverRequestOrigin
 * @return {?}
 */
export function getLoadPath(path, serverRequestOrigin) {
    if (!path) {
        return undefined;
    }
    if (serverRequestOrigin && !path.match(/^http(s)?:\/\//)) {
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        if (path.startsWith('./')) {
            path = path.slice(2);
        }
        /** @type {?} */
        const result = `${serverRequestOrigin}/${path}`;
        return result;
    }
    return path;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7OztBQUtwRCxNQUFNLFVBQVUsV0FBVyxDQUN6QixVQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxVQUFzQixFQUN0QixtQkFBMkI7SUFFM0I7OztJQUFPLEdBQUcsRUFBRSxDQUNWLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTs7OztJQUFDLE1BQU0sQ0FBQyxFQUFFOztZQUMzQyxhQUFhLEdBQXdCO1lBQ3ZDLEVBQUUsRUFBRSxFQUFFOztZQUNOLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztrQkFDekIsUUFBUSxHQUFHLFdBQVcsQ0FDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUM1QixtQkFBbUIsQ0FDcEI7O2tCQUNLLE9BQU8sR0FBRztnQkFDZCxRQUFRO2dCQUNSLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7YUFDdkM7WUFDRCxhQUFhLHFCQUFRLGFBQWEsSUFBRSxPQUFPLEdBQUUsQ0FBQztTQUMvQztRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhOzs7UUFBRSxHQUFHLEVBQUU7WUFDdEMsNkVBQTZFO1lBQzdFLHNHQUFzRztZQUN0RyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLEVBQUM7QUFDUCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxZQUFrQyxFQUFFO0lBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkIsSUFBSSxFQUNKLFNBQVMsRUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQzFCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUF5QjtJQUNsRSxzRUFBc0U7SUFDdEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUN2RSxDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFVBQXNCO0lBRXRCOzs7Ozs7O0lBQU8sQ0FBQyxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQzFFLFVBQVU7YUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2xDLFNBQVM7Ozs7UUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7UUFDdkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNsRCxDQUFDO0lBQ04sQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWSxFQUFFLG1CQUEyQjtJQUNuRSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFDRCxJQUFJLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQ3hELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0Qjs7Y0FDSyxNQUFNLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxJQUFJLEVBQUU7UUFDL0MsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICBzZXJ2ZXJSZXF1ZXN0T3JpZ2luOiBzdHJpbmdcbik6ICgpID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdpMThuJykudGhlbihjb25maWcgPT4ge1xuICAgICAgbGV0IGkxOG5leHRDb25maWc6IGkxOG5leHQuSW5pdE9wdGlvbnMgPSB7XG4gICAgICAgIG5zOiBbXSwgLy8gZG9uJ3QgcHJlbG9hZCBhbnkgbmFtZXNwYWNlc1xuICAgICAgICBmYWxsYmFja0xuZzogY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nLFxuICAgICAgICBkZWJ1ZzogY29uZmlnLmkxOG4uZGVidWcsXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgaWYgKGNvbmZpZy5pMThuLmJhY2tlbmQpIHtcbiAgICAgICAgaTE4bmV4dC51c2UoaTE4bmV4dFhockJhY2tlbmQpO1xuICAgICAgICBjb25zdCBsb2FkUGF0aCA9IGdldExvYWRQYXRoKFxuICAgICAgICAgIGNvbmZpZy5pMThuLmJhY2tlbmQubG9hZFBhdGgsXG4gICAgICAgICAgc2VydmVyUmVxdWVzdE9yaWdpblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBiYWNrZW5kID0ge1xuICAgICAgICAgIGxvYWRQYXRoLFxuICAgICAgICAgIGFqYXg6IGkxOG5leHRHZXRIdHRwQ2xpZW50KGh0dHBDbGllbnQpLFxuICAgICAgICB9O1xuICAgICAgICBpMThuZXh0Q29uZmlnID0geyAuLi5pMThuZXh0Q29uZmlnLCBiYWNrZW5kIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpMThuZXh0LmluaXQoaTE4bmV4dENvbmZpZywgKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCB1c2UgaTE4bmV4dCdzICdyZXNvdXJjZXMnIGNvbmZpZyBrZXkgZm9yIGFkZGluZyBzdGF0aWMgdHJhbnNsYXRpb25zLFxuICAgICAgICAvLyBiZWNhdXNlIGl0IHdpbGwgZGlzYWJsZSBsb2FkaW5nIGNodW5rcyBmcm9tIGJhY2tlbmQuIFdlIGFkZCByZXNvdXJjZXMgaGVyZSwgaW4gdGhlIGluaXQncyBjYWxsYmFjay5cbiAgICAgICAgaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhjb25maWcuaTE4bi5yZXNvdXJjZXMpO1xuICAgICAgICBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZVNlcnZpY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0QWRkVHJhbnNsYXRpb25zKHJlc291cmNlczogVHJhbnNsYXRpb25SZXNvdXJjZXMgPSB7fSkge1xuICBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgT2JqZWN0LmtleXMocmVzb3VyY2VzW2xhbmddKS5mb3JFYWNoKGNodW5rTmFtZSA9PiB7XG4gICAgICBpMThuZXh0LmFkZFJlc291cmNlQnVuZGxlKFxuICAgICAgICBsYW5nLFxuICAgICAgICBjaHVua05hbWUsXG4gICAgICAgIHJlc291cmNlc1tsYW5nXVtjaHVua05hbWVdLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgLy8gYWx3YXlzIHVwZGF0ZSBsYW5ndWFnZSBvZiBpMThuZXh0IG9uIHNpdGUgY29udGV4dCAobGFuZ3VhZ2UpIGNoYW5nZVxuICBsYW5ndWFnZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUobGFuZyA9PiBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxhbmcpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gYXBwcm9wcmlhdGUgZm9yIGkxOG5leHQgdG8gbWFrZSBodHRwIGNhbGxzIGZvciBKU09OIGZpbGVzLlxuICogU2VlIGRvY3MgZm9yIGBpMThuZXh0LXhoci1iYWNrZW5kYDogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC14aHItYmFja2VuZCNiYWNrZW5kLW9wdGlvbnNcbiAqXG4gKiBJdCB1c2VzIEFuZ3VsYXIgSHR0cENsaWVudCB1bmRlciB0aGUgaG9vZCwgc28gaXQgd29ya3MgaW4gU1NSLlxuICogQHBhcmFtIGh0dHBDbGllbnQgQW5ndWxhciBodHRwIGNsaWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEdldEh0dHBDbGllbnQoXG4gIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbik6ICh1cmw6IHN0cmluZywgb3B0aW9uczogb2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIGRhdGE6IG9iamVjdCkgPT4gdm9pZCB7XG4gIHJldHVybiAodXJsOiBzdHJpbmcsIF9vcHRpb25zOiBvYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgX2RhdGE6IG9iamVjdCkgPT4ge1xuICAgIGh0dHBDbGllbnRcbiAgICAgIC5nZXQodXJsLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IGNhbGxiYWNrKGRhdGEsIHsgc3RhdHVzOiAyMDAgfSksXG4gICAgICAgIGVycm9yID0+IGNhbGxiYWNrKG51bGwsIHsgc3RhdHVzOiBlcnJvci5zdGF0dXMgfSlcbiAgICAgICk7XG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHJlbGF0aXZlIHBhdGggdG8gdGhlIGFic29sdXRlIG9uZSBpbiBTU1IsIHVzaW5nIHRoZSBzZXJ2ZXIgcmVxdWVzdCdzIG9yaWdpbi5cbiAqIEl0J3MgbmVlZGVkLCBiZWNhdXNlIEFuZ3VsYXIgVW5pdmVyc2FsIGRvZXNuJ3Qgc3VwcG9ydCByZWxhdGl2ZSBVUkxzIGluIEh0dHBDbGllbnQuIFNlZSBBbmd1bGFyIGlzc3VlczpcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTkyMjRcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy84NThcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvYWRQYXRoKHBhdGg6IHN0cmluZywgc2VydmVyUmVxdWVzdE9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoc2VydmVyUmVxdWVzdE9yaWdpbiAmJiAhcGF0aC5tYXRjaCgvXmh0dHAocyk/OlxcL1xcLy8pKSB7XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgxKTtcbiAgICB9XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMik7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGAke3NlcnZlclJlcXVlc3RPcmlnaW59LyR7cGF0aH1gO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG4iXX0=
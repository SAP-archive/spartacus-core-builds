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
 * @return {?}
 */
export function i18nextInit(configInit, languageService, httpClient) {
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
            const backend = {
                loadPath: config.i18n.backend.loadPath || undefined,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBS3BELE1BQU0sVUFBVSxXQUFXLENBQ3pCLFVBQW9DLEVBQ3BDLGVBQWdDLEVBQ2hDLFVBQXNCO0lBRXRCOzs7SUFBTyxHQUFHLEVBQUUsQ0FDVixVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7Ozs7SUFBQyxNQUFNLENBQUMsRUFBRTs7WUFDM0MsYUFBYSxHQUF3QjtZQUN2QyxFQUFFLEVBQUUsRUFBRTs7WUFDTixXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDeEIsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxLQUFLO2FBQ25CO1NBQ0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7a0JBQ3pCLE9BQU8sR0FBRztnQkFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLFNBQVM7Z0JBQ25ELElBQUksRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7YUFDdkM7WUFDRCxhQUFhLHFCQUFRLGFBQWEsSUFBRSxPQUFPLEdBQUUsQ0FBQztTQUMvQztRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhOzs7UUFBRSxHQUFHLEVBQUU7WUFDdEMsNkVBQTZFO1lBQzdFLHNHQUFzRztZQUN0RyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLEVBQUM7QUFDUCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxZQUFrQyxFQUFFO0lBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztJQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkIsSUFBSSxFQUNKLFNBQVMsRUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQzFCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUF5QjtJQUNsRSxzRUFBc0U7SUFDdEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUN2RSxDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFVBQXNCO0lBRXRCOzs7Ozs7O0lBQU8sQ0FBQyxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQzFFLFVBQVU7YUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2xDLFNBQVM7Ozs7UUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7UUFDdkMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNsRCxDQUFDO0lBQ04sQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4pOiAoKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnaTE4bicpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGxldCBpMThuZXh0Q29uZmlnOiBpMThuZXh0LkluaXRPcHRpb25zID0ge1xuICAgICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgICAgZGVidWc6IGNvbmZpZy5pMThuLmRlYnVnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICAgIGkxOG5leHQudXNlKGkxOG5leHRYaHJCYWNrZW5kKTtcbiAgICAgICAgY29uc3QgYmFja2VuZCA9IHtcbiAgICAgICAgICBsb2FkUGF0aDogY29uZmlnLmkxOG4uYmFja2VuZC5sb2FkUGF0aCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgYWpheDogaTE4bmV4dEdldEh0dHBDbGllbnQoaHR0cENsaWVudCksXG4gICAgICAgIH07XG4gICAgICAgIGkxOG5leHRDb25maWcgPSB7IC4uLmkxOG5leHRDb25maWcsIGJhY2tlbmQgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGkxOG5leHQuaW5pdChpMThuZXh0Q29uZmlnLCAoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVzZSBpMThuZXh0J3MgJ3Jlc291cmNlcycgY29uZmlnIGtleSBmb3IgYWRkaW5nIHN0YXRpYyB0cmFuc2xhdGlvbnMsXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgd2lsbCBkaXNhYmxlIGxvYWRpbmcgY2h1bmtzIGZyb20gYmFja2VuZC4gV2UgYWRkIHJlc291cmNlcyBoZXJlLCBpbiB0aGUgaW5pdCdzIGNhbGxiYWNrLlxuICAgICAgICBpMThuZXh0QWRkVHJhbnNsYXRpb25zKGNvbmZpZy5pMThuLnJlc291cmNlcyk7XG4gICAgICAgIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlU2VydmljZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMocmVzb3VyY2VzOiBUcmFuc2xhdGlvblJlc291cmNlcyA9IHt9KSB7XG4gIE9iamVjdC5rZXlzKHJlc291cmNlcykuZm9yRWFjaChsYW5nID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXNvdXJjZXNbbGFuZ10pLmZvckVhY2goY2h1bmtOYW1lID0+IHtcbiAgICAgIGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUoXG4gICAgICAgIGxhbmcsXG4gICAgICAgIGNodW5rTmFtZSxcbiAgICAgICAgcmVzb3VyY2VzW2xhbmddW2NodW5rTmFtZV0sXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAvLyBhbHdheXMgdXBkYXRlIGxhbmd1YWdlIG9mIGkxOG5leHQgb24gc2l0ZSBjb250ZXh0IChsYW5ndWFnZSkgY2hhbmdlXG4gIGxhbmd1YWdlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShsYW5nID0+IGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobGFuZykpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBhcHByb3ByaWF0ZSBmb3IgaTE4bmV4dCB0byBtYWtlIGh0dHAgY2FsbHMgZm9yIEpTT04gZmlsZXMuXG4gKiBTZWUgZG9jcyBmb3IgYGkxOG5leHQteGhyLWJhY2tlbmRgOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LXhoci1iYWNrZW5kI2JhY2tlbmQtb3B0aW9uc1xuICpcbiAqIEl0IHVzZXMgQW5ndWxhciBIdHRwQ2xpZW50IHVuZGVyIHRoZSBob29kLCBzbyBpdCB3b3JrcyBpbiBTU1IuXG4gKiBAcGFyYW0gaHR0cENsaWVudCBBbmd1bGFyIGh0dHAgY2xpZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0R2V0SHR0cENsaWVudChcbiAgaHR0cENsaWVudDogSHR0cENsaWVudFxuKTogKHVybDogc3RyaW5nLCBvcHRpb25zOiBvYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgZGF0YTogb2JqZWN0KSA9PiB2b2lkIHtcbiAgcmV0dXJuICh1cmw6IHN0cmluZywgX29wdGlvbnM6IG9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBfZGF0YTogb2JqZWN0KSA9PiB7XG4gICAgaHR0cENsaWVudFxuICAgICAgLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gY2FsbGJhY2soZGF0YSwgeyBzdGF0dXM6IDIwMCB9KSxcbiAgICAgICAgZXJyb3IgPT4gY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6IGVycm9yLnN0YXR1cyB9KVxuICAgICAgKTtcbiAgfTtcbn1cbiJdfQ==
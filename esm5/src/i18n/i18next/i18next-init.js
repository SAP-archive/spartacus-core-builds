/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return function () {
        /** @type {?} */
        var i18nextConfig = {
            ns: [],
            // don't preload any namespaces
            fallbackLng: config.i18n.fallbackLang,
            debug: config.i18n.debug,
        };
        if (config.i18n.backend) {
            i18next.use(i18nextXhrBackend);
            i18nextConfig = tslib_1.__assign({}, i18nextConfig, { backend: config.i18n.backend });
        }
        return i18next.init(i18nextConfig, function () {
            // Don't use i18next's 'resources' config key for adding static translations,
            // because it will disable loading chunks from backend. We add resources here, in the init's callback.
            i18nextAddTranslations(config.i18n.resources);
            syncI18nextWithSiteContext(languageService);
        });
    };
}
/**
 * @param {?=} resources
 * @return {?}
 */
export function i18nextAddTranslations(resources) {
    if (resources === void 0) { resources = {}; }
    Object.keys(resources).forEach(function (lang) {
        Object.keys(resources[lang]).forEach(function (chunkName) {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        });
    });
}
/**
 * @param {?} language
 * @return {?}
 */
export function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe(function (lang) { return i18next.changeLanguage(lang); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBS3BELE1BQU0sVUFBVSxXQUFXLENBQ3pCLE1BQWtCLEVBQ2xCLGVBQWdDO0lBRWhDLE9BQU87O1lBQ0QsYUFBYSxHQUF3QjtZQUN2QyxFQUFFLEVBQUUsRUFBRTs7WUFDTixXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixhQUFhLHdCQUFRLGFBQWEsSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUUsQ0FBQztTQUNwRTtRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDakMsNkVBQTZFO1lBQzdFLHNHQUFzRztZQUN0RyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsU0FBb0M7SUFBcEMsMEJBQUEsRUFBQSxjQUFvQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQzVDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkIsSUFBSSxFQUNKLFNBQVMsRUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQzFCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUF5QjtJQUNsRSxzRUFBc0U7SUFDdEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztBQUN2RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgaTE4bmV4dFhockJhY2tlbmQgZnJvbSAnaTE4bmV4dC14aHItYmFja2VuZCc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblJlc291cmNlcyB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLXJlc291cmNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0SW5pdChcbiAgY29uZmlnOiBJMThuQ29uZmlnLFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuKTogKCkgPT4gUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsZXQgaTE4bmV4dENvbmZpZzogaTE4bmV4dC5Jbml0T3B0aW9ucyA9IHtcbiAgICAgIG5zOiBbXSwgLy8gZG9uJ3QgcHJlbG9hZCBhbnkgbmFtZXNwYWNlc1xuICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgIGRlYnVnOiBjb25maWcuaTE4bi5kZWJ1ZyxcbiAgICB9O1xuICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICBpMThuZXh0LnVzZShpMThuZXh0WGhyQmFja2VuZCk7XG4gICAgICBpMThuZXh0Q29uZmlnID0geyAuLi5pMThuZXh0Q29uZmlnLCBiYWNrZW5kOiBjb25maWcuaTE4bi5iYWNrZW5kIH07XG4gICAgfVxuICAgIHJldHVybiBpMThuZXh0LmluaXQoaTE4bmV4dENvbmZpZywgKCkgPT4ge1xuICAgICAgLy8gRG9uJ3QgdXNlIGkxOG5leHQncyAncmVzb3VyY2VzJyBjb25maWcga2V5IGZvciBhZGRpbmcgc3RhdGljIHRyYW5zbGF0aW9ucyxcbiAgICAgIC8vIGJlY2F1c2UgaXQgd2lsbCBkaXNhYmxlIGxvYWRpbmcgY2h1bmtzIGZyb20gYmFja2VuZC4gV2UgYWRkIHJlc291cmNlcyBoZXJlLCBpbiB0aGUgaW5pdCdzIGNhbGxiYWNrLlxuICAgICAgaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhjb25maWcuaTE4bi5yZXNvdXJjZXMpO1xuICAgICAgc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMocmVzb3VyY2VzOiBUcmFuc2xhdGlvblJlc291cmNlcyA9IHt9KSB7XG4gIE9iamVjdC5rZXlzKHJlc291cmNlcykuZm9yRWFjaChsYW5nID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXNvdXJjZXNbbGFuZ10pLmZvckVhY2goY2h1bmtOYW1lID0+IHtcbiAgICAgIGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUoXG4gICAgICAgIGxhbmcsXG4gICAgICAgIGNodW5rTmFtZSxcbiAgICAgICAgcmVzb3VyY2VzW2xhbmddW2NodW5rTmFtZV0sXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAvLyBhbHdheXMgdXBkYXRlIGxhbmd1YWdlIG9mIGkxOG5leHQgb24gc2l0ZSBjb250ZXh0IChsYW5ndWFnZSkgY2hhbmdlXG4gIGxhbmd1YWdlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShsYW5nID0+IGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobGFuZykpO1xufVxuIl19
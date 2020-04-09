import { __assign } from "tslib";
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
export function i18nextInit(configInit, languageService, httpClient, serverRequestOrigin) {
    return function () {
        return configInit.getStableConfig('i18n').then(function (config) {
            var i18nextConfig = {
                ns: [],
                fallbackLng: config.i18n.fallbackLang,
                debug: config.i18n.debug,
                interpolation: {
                    escapeValue: false,
                },
            };
            if (config.i18n.backend) {
                i18next.use(i18nextXhrBackend);
                var loadPath = getLoadPath(config.i18n.backend.loadPath, serverRequestOrigin);
                var backend = {
                    loadPath: loadPath,
                    ajax: i18nextGetHttpClient(httpClient),
                };
                i18nextConfig = __assign(__assign({}, i18nextConfig), { backend: backend });
            }
            return i18next.init(i18nextConfig, function () {
                // Don't use i18next's 'resources' config key for adding static translations,
                // because it will disable loading chunks from backend. We add resources here, in the init's callback.
                i18nextAddTranslations(config.i18n.resources);
                syncI18nextWithSiteContext(languageService);
            });
        });
    };
}
export function i18nextAddTranslations(resources) {
    if (resources === void 0) { resources = {}; }
    Object.keys(resources).forEach(function (lang) {
        Object.keys(resources[lang]).forEach(function (chunkName) {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        });
    });
}
export function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe(function (lang) { return i18next.changeLanguage(lang); });
}
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param httpClient Angular http client
 */
export function i18nextGetHttpClient(httpClient) {
    return function (url, _options, callback, _data) {
        httpClient.get(url, { responseType: 'text' }).subscribe(function (data) { return callback(data, { status: 200 }); }, function (error) { return callback(null, { status: error.status }); });
    };
}
/**
 * Resolves the relative path to the absolute one in SSR, using the server request's origin.
 * It's needed, because Angular Universal doesn't support relative URLs in HttpClient. See Angular issues:
 * - https://github.com/angular/angular/issues/19224
 * - https://github.com/angular/universal/issues/858
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
        var result = serverRequestOrigin + "/" + path;
        return result;
    }
    return path;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sT0FBd0IsTUFBTSxTQUFTLENBQUM7QUFDL0MsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUtwRCxNQUFNLFVBQVUsV0FBVyxDQUN6QixVQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxVQUFzQixFQUN0QixtQkFBMkI7SUFFM0IsT0FBTztRQUNMLE9BQUEsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzdDLElBQUksYUFBYSxHQUFnQjtnQkFDL0IsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDeEIsYUFBYSxFQUFFO29CQUNiLFdBQVcsRUFBRSxLQUFLO2lCQUNuQjthQUNGLENBQUM7WUFDRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9CLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUM1QixtQkFBbUIsQ0FDcEIsQ0FBQztnQkFDRixJQUFNLE9BQU8sR0FBRztvQkFDZCxRQUFRLFVBQUE7b0JBQ1IsSUFBSSxFQUFFLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztpQkFDdkMsQ0FBQztnQkFDRixhQUFhLHlCQUFRLGFBQWEsS0FBRSxPQUFPLFNBQUEsR0FBRSxDQUFDO2FBQy9DO1lBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDakMsNkVBQTZFO2dCQUM3RSxzR0FBc0c7Z0JBQ3RHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBNUJGLENBNEJFLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsY0FBb0M7SUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUM3QyxPQUFPLENBQUMsaUJBQWlCLENBQ3ZCLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUF5QjtJQUNsRSxzRUFBc0U7SUFDdEUsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxVQUFzQjtJQUV0QixPQUFPLFVBQUMsR0FBVyxFQUFFLFFBQWdCLEVBQUUsUUFBa0IsRUFBRSxLQUFhO1FBQ3RFLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyRCxVQUFDLElBQUksSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsRUFDekMsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxDQUNwRCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsbUJBQTJCO0lBQ25FLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELElBQUksbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDeEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsSUFBTSxNQUFNLEdBQU0sbUJBQW1CLFNBQUksSUFBTSxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IGkxOG5leHQsIHsgSW5pdE9wdGlvbnMgfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICBzZXJ2ZXJSZXF1ZXN0T3JpZ2luOiBzdHJpbmdcbik6ICgpID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdpMThuJykudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICBsZXQgaTE4bmV4dENvbmZpZzogSW5pdE9wdGlvbnMgPSB7XG4gICAgICAgIG5zOiBbXSwgLy8gZG9uJ3QgcHJlbG9hZCBhbnkgbmFtZXNwYWNlc1xuICAgICAgICBmYWxsYmFja0xuZzogY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nLFxuICAgICAgICBkZWJ1ZzogY29uZmlnLmkxOG4uZGVidWcsXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgaWYgKGNvbmZpZy5pMThuLmJhY2tlbmQpIHtcbiAgICAgICAgaTE4bmV4dC51c2UoaTE4bmV4dFhockJhY2tlbmQpO1xuICAgICAgICBjb25zdCBsb2FkUGF0aCA9IGdldExvYWRQYXRoKFxuICAgICAgICAgIGNvbmZpZy5pMThuLmJhY2tlbmQubG9hZFBhdGgsXG4gICAgICAgICAgc2VydmVyUmVxdWVzdE9yaWdpblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBiYWNrZW5kID0ge1xuICAgICAgICAgIGxvYWRQYXRoLFxuICAgICAgICAgIGFqYXg6IGkxOG5leHRHZXRIdHRwQ2xpZW50KGh0dHBDbGllbnQpLFxuICAgICAgICB9O1xuICAgICAgICBpMThuZXh0Q29uZmlnID0geyAuLi5pMThuZXh0Q29uZmlnLCBiYWNrZW5kIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpMThuZXh0LmluaXQoaTE4bmV4dENvbmZpZywgKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCB1c2UgaTE4bmV4dCdzICdyZXNvdXJjZXMnIGNvbmZpZyBrZXkgZm9yIGFkZGluZyBzdGF0aWMgdHJhbnNsYXRpb25zLFxuICAgICAgICAvLyBiZWNhdXNlIGl0IHdpbGwgZGlzYWJsZSBsb2FkaW5nIGNodW5rcyBmcm9tIGJhY2tlbmQuIFdlIGFkZCByZXNvdXJjZXMgaGVyZSwgaW4gdGhlIGluaXQncyBjYWxsYmFjay5cbiAgICAgICAgaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhjb25maWcuaTE4bi5yZXNvdXJjZXMpO1xuICAgICAgICBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZVNlcnZpY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0QWRkVHJhbnNsYXRpb25zKHJlc291cmNlczogVHJhbnNsYXRpb25SZXNvdXJjZXMgPSB7fSkge1xuICBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZvckVhY2goKGxhbmcpID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXNvdXJjZXNbbGFuZ10pLmZvckVhY2goKGNodW5rTmFtZSkgPT4ge1xuICAgICAgaTE4bmV4dC5hZGRSZXNvdXJjZUJ1bmRsZShcbiAgICAgICAgbGFuZyxcbiAgICAgICAgY2h1bmtOYW1lLFxuICAgICAgICByZXNvdXJjZXNbbGFuZ11bY2h1bmtOYW1lXSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIC8vIGFsd2F5cyB1cGRhdGUgbGFuZ3VhZ2Ugb2YgaTE4bmV4dCBvbiBzaXRlIGNvbnRleHQgKGxhbmd1YWdlKSBjaGFuZ2VcbiAgbGFuZ3VhZ2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKChsYW5nKSA9PiBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxhbmcpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gYXBwcm9wcmlhdGUgZm9yIGkxOG5leHQgdG8gbWFrZSBodHRwIGNhbGxzIGZvciBKU09OIGZpbGVzLlxuICogU2VlIGRvY3MgZm9yIGBpMThuZXh0LXhoci1iYWNrZW5kYDogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC14aHItYmFja2VuZCNiYWNrZW5kLW9wdGlvbnNcbiAqXG4gKiBJdCB1c2VzIEFuZ3VsYXIgSHR0cENsaWVudCB1bmRlciB0aGUgaG9vZCwgc28gaXQgd29ya3MgaW4gU1NSLlxuICogQHBhcmFtIGh0dHBDbGllbnQgQW5ndWxhciBodHRwIGNsaWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEdldEh0dHBDbGllbnQoXG4gIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbik6ICh1cmw6IHN0cmluZywgb3B0aW9uczogb2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIGRhdGE6IG9iamVjdCkgPT4gdm9pZCB7XG4gIHJldHVybiAodXJsOiBzdHJpbmcsIF9vcHRpb25zOiBvYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgX2RhdGE6IG9iamVjdCkgPT4ge1xuICAgIGh0dHBDbGllbnQuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5zdWJzY3JpYmUoXG4gICAgICAoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSwgeyBzdGF0dXM6IDIwMCB9KSxcbiAgICAgIChlcnJvcikgPT4gY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6IGVycm9yLnN0YXR1cyB9KVxuICAgICk7XG4gIH07XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHJlbGF0aXZlIHBhdGggdG8gdGhlIGFic29sdXRlIG9uZSBpbiBTU1IsIHVzaW5nIHRoZSBzZXJ2ZXIgcmVxdWVzdCdzIG9yaWdpbi5cbiAqIEl0J3MgbmVlZGVkLCBiZWNhdXNlIEFuZ3VsYXIgVW5pdmVyc2FsIGRvZXNuJ3Qgc3VwcG9ydCByZWxhdGl2ZSBVUkxzIGluIEh0dHBDbGllbnQuIFNlZSBBbmd1bGFyIGlzc3VlczpcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTkyMjRcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy84NThcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvYWRQYXRoKHBhdGg6IHN0cmluZywgc2VydmVyUmVxdWVzdE9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoc2VydmVyUmVxdWVzdE9yaWdpbiAmJiAhcGF0aC5tYXRjaCgvXmh0dHAocyk/OlxcL1xcLy8pKSB7XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgxKTtcbiAgICB9XG4gICAgaWYgKHBhdGguc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMik7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGAke3NlcnZlclJlcXVlc3RPcmlnaW59LyR7cGF0aH1gO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG4iXX0=
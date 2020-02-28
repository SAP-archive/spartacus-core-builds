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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBS3BELE1BQU0sVUFBVSxXQUFXLENBQ3pCLFVBQW9DLEVBQ3BDLGVBQWdDLEVBQ2hDLFVBQXNCLEVBQ3RCLG1CQUEyQjtJQUUzQixPQUFPO1FBQ0wsT0FBQSxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDNUMsSUFBSSxhQUFhLEdBQXdCO2dCQUN2QyxFQUFFLEVBQUUsRUFBRTtnQkFDTixXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN4QixhQUFhLEVBQUU7b0JBQ2IsV0FBVyxFQUFFLEtBQUs7aUJBQ25CO2FBQ0YsQ0FBQztZQUNGLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0IsSUFBTSxRQUFRLEdBQUcsV0FBVyxDQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQzVCLG1CQUFtQixDQUNwQixDQUFDO2dCQUNGLElBQU0sT0FBTyxHQUFHO29CQUNkLFFBQVEsVUFBQTtvQkFDUixJQUFJLEVBQUUsb0JBQW9CLENBQUMsVUFBVSxDQUFDO2lCQUN2QyxDQUFDO2dCQUNGLGFBQWEseUJBQVEsYUFBYSxLQUFFLE9BQU8sU0FBQSxHQUFFLENBQUM7YUFDL0M7WUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNqQyw2RUFBNkU7Z0JBQzdFLHNHQUFzRztnQkFDdEcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUE1QkYsQ0E0QkUsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsU0FBb0M7SUFBcEMsMEJBQUEsRUFBQSxjQUFvQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQzVDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkIsSUFBSSxFQUNKLFNBQVMsRUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQzFCLElBQUksRUFDSixJQUFJLENBQ0wsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUFDLFFBQXlCO0lBQ2xFLHNFQUFzRTtJQUN0RSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFVBQXNCO0lBRXRCLE9BQU8sVUFBQyxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxRQUFrQixFQUFFLEtBQWE7UUFDdEUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JELFVBQUEsSUFBSSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUEvQixDQUErQixFQUN2QyxVQUFBLEtBQUssSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQXhDLENBQXdDLENBQ2xELENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxtQkFBMkI7SUFDbkUsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsSUFBSSxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFNLE1BQU0sR0FBTSxtQkFBbUIsU0FBSSxJQUFNLENBQUM7UUFDaEQsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICBzZXJ2ZXJSZXF1ZXN0T3JpZ2luOiBzdHJpbmdcbik6ICgpID0+IFByb21pc2U8YW55PiB7XG4gIHJldHVybiAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdpMThuJykudGhlbihjb25maWcgPT4ge1xuICAgICAgbGV0IGkxOG5leHRDb25maWc6IGkxOG5leHQuSW5pdE9wdGlvbnMgPSB7XG4gICAgICAgIG5zOiBbXSwgLy8gZG9uJ3QgcHJlbG9hZCBhbnkgbmFtZXNwYWNlc1xuICAgICAgICBmYWxsYmFja0xuZzogY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nLFxuICAgICAgICBkZWJ1ZzogY29uZmlnLmkxOG4uZGVidWcsXG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgaWYgKGNvbmZpZy5pMThuLmJhY2tlbmQpIHtcbiAgICAgICAgaTE4bmV4dC51c2UoaTE4bmV4dFhockJhY2tlbmQpO1xuICAgICAgICBjb25zdCBsb2FkUGF0aCA9IGdldExvYWRQYXRoKFxuICAgICAgICAgIGNvbmZpZy5pMThuLmJhY2tlbmQubG9hZFBhdGgsXG4gICAgICAgICAgc2VydmVyUmVxdWVzdE9yaWdpblxuICAgICAgICApO1xuICAgICAgICBjb25zdCBiYWNrZW5kID0ge1xuICAgICAgICAgIGxvYWRQYXRoLFxuICAgICAgICAgIGFqYXg6IGkxOG5leHRHZXRIdHRwQ2xpZW50KGh0dHBDbGllbnQpLFxuICAgICAgICB9O1xuICAgICAgICBpMThuZXh0Q29uZmlnID0geyAuLi5pMThuZXh0Q29uZmlnLCBiYWNrZW5kIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpMThuZXh0LmluaXQoaTE4bmV4dENvbmZpZywgKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCB1c2UgaTE4bmV4dCdzICdyZXNvdXJjZXMnIGNvbmZpZyBrZXkgZm9yIGFkZGluZyBzdGF0aWMgdHJhbnNsYXRpb25zLFxuICAgICAgICAvLyBiZWNhdXNlIGl0IHdpbGwgZGlzYWJsZSBsb2FkaW5nIGNodW5rcyBmcm9tIGJhY2tlbmQuIFdlIGFkZCByZXNvdXJjZXMgaGVyZSwgaW4gdGhlIGluaXQncyBjYWxsYmFjay5cbiAgICAgICAgaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhjb25maWcuaTE4bi5yZXNvdXJjZXMpO1xuICAgICAgICBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZVNlcnZpY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0QWRkVHJhbnNsYXRpb25zKHJlc291cmNlczogVHJhbnNsYXRpb25SZXNvdXJjZXMgPSB7fSkge1xuICBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLmZvckVhY2gobGFuZyA9PiB7XG4gICAgT2JqZWN0LmtleXMocmVzb3VyY2VzW2xhbmddKS5mb3JFYWNoKGNodW5rTmFtZSA9PiB7XG4gICAgICBpMThuZXh0LmFkZFJlc291cmNlQnVuZGxlKFxuICAgICAgICBsYW5nLFxuICAgICAgICBjaHVua05hbWUsXG4gICAgICAgIHJlc291cmNlc1tsYW5nXVtjaHVua05hbWVdLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgLy8gYWx3YXlzIHVwZGF0ZSBsYW5ndWFnZSBvZiBpMThuZXh0IG9uIHNpdGUgY29udGV4dCAobGFuZ3VhZ2UpIGNoYW5nZVxuICBsYW5ndWFnZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUobGFuZyA9PiBpMThuZXh0LmNoYW5nZUxhbmd1YWdlKGxhbmcpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gYXBwcm9wcmlhdGUgZm9yIGkxOG5leHQgdG8gbWFrZSBodHRwIGNhbGxzIGZvciBKU09OIGZpbGVzLlxuICogU2VlIGRvY3MgZm9yIGBpMThuZXh0LXhoci1iYWNrZW5kYDogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC14aHItYmFja2VuZCNiYWNrZW5kLW9wdGlvbnNcbiAqXG4gKiBJdCB1c2VzIEFuZ3VsYXIgSHR0cENsaWVudCB1bmRlciB0aGUgaG9vZCwgc28gaXQgd29ya3MgaW4gU1NSLlxuICogQHBhcmFtIGh0dHBDbGllbnQgQW5ndWxhciBodHRwIGNsaWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEdldEh0dHBDbGllbnQoXG4gIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbik6ICh1cmw6IHN0cmluZywgb3B0aW9uczogb2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIGRhdGE6IG9iamVjdCkgPT4gdm9pZCB7XG4gIHJldHVybiAodXJsOiBzdHJpbmcsIF9vcHRpb25zOiBvYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgX2RhdGE6IG9iamVjdCkgPT4ge1xuICAgIGh0dHBDbGllbnQuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IGNhbGxiYWNrKGRhdGEsIHsgc3RhdHVzOiAyMDAgfSksXG4gICAgICBlcnJvciA9PiBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogZXJyb3Iuc3RhdHVzIH0pXG4gICAgKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcmVsYXRpdmUgcGF0aCB0byB0aGUgYWJzb2x1dGUgb25lIGluIFNTUiwgdXNpbmcgdGhlIHNlcnZlciByZXF1ZXN0J3Mgb3JpZ2luLlxuICogSXQncyBuZWVkZWQsIGJlY2F1c2UgQW5ndWxhciBVbml2ZXJzYWwgZG9lc24ndCBzdXBwb3J0IHJlbGF0aXZlIFVSTHMgaW4gSHR0cENsaWVudC4gU2VlIEFuZ3VsYXIgaXNzdWVzOlxuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xOTIyNFxuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzg1OFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9hZFBhdGgocGF0aDogc3RyaW5nLCBzZXJ2ZXJSZXF1ZXN0T3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChzZXJ2ZXJSZXF1ZXN0T3JpZ2luICYmICFwYXRoLm1hdGNoKC9eaHR0cChzKT86XFwvXFwvLykpIHtcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICBwYXRoID0gcGF0aC5zbGljZSgyKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYCR7c2VydmVyUmVxdWVzdE9yaWdpbn0vJHtwYXRofWA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cbiJdfQ==
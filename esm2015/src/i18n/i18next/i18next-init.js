import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
export function i18nextInit(configInit, languageService, httpClient, serverRequestOrigin) {
    return () => configInit.getStableConfig('i18n').then(config => {
        let i18nextConfig = {
            ns: [],
            fallbackLng: config.i18n.fallbackLang,
            debug: config.i18n.debug,
            interpolation: {
                escapeValue: false,
            },
        };
        if (config.i18n.backend) {
            i18next.use(i18nextXhrBackend);
            const loadPath = getLoadPath(config.i18n.backend.loadPath, serverRequestOrigin);
            const backend = {
                loadPath,
                ajax: i18nextGetHttpClient(httpClient),
            };
            i18nextConfig = Object.assign(Object.assign({}, i18nextConfig), { backend });
        }
        return i18next.init(i18nextConfig, () => {
            // Don't use i18next's 'resources' config key for adding static translations,
            // because it will disable loading chunks from backend. We add resources here, in the init's callback.
            i18nextAddTranslations(config.i18n.resources);
            syncI18nextWithSiteContext(languageService);
        });
    });
}
export function i18nextAddTranslations(resources = {}) {
    Object.keys(resources).forEach(lang => {
        Object.keys(resources[lang]).forEach(chunkName => {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        });
    });
}
export function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe(lang => i18next.changeLanguage(lang));
}
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param httpClient Angular http client
 */
export function i18nextGetHttpClient(httpClient) {
    return (url, _options, callback, _data) => {
        httpClient
            .get(url, { responseType: 'text' })
            .subscribe(data => callback(data, { status: 200 }), error => callback(null, { status: error.status }));
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
        const result = `${serverRequestOrigin}/${path}`;
        return result;
    }
    return path;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8saUJBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFLcEQsTUFBTSxVQUFVLFdBQVcsQ0FDekIsVUFBb0MsRUFDcEMsZUFBZ0MsRUFDaEMsVUFBc0IsRUFDdEIsbUJBQTJCO0lBRTNCLE9BQU8sR0FBRyxFQUFFLENBQ1YsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDL0MsSUFBSSxhQUFhLEdBQXdCO1lBQ3ZDLEVBQUUsRUFBRSxFQUFFO1lBQ04sV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3hCLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsS0FBSzthQUNuQjtTQUNGLENBQUM7UUFDRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFDNUIsbUJBQW1CLENBQ3BCLENBQUM7WUFDRixNQUFNLE9BQU8sR0FBRztnQkFDZCxRQUFRO2dCQUNSLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7YUFDdkMsQ0FBQztZQUNGLGFBQWEsbUNBQVEsYUFBYSxLQUFFLE9BQU8sR0FBRSxDQUFDO1NBQy9DO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7WUFDdEMsNkVBQTZFO1lBQzdFLHNHQUFzRztZQUN0RyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLDBCQUEwQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFlBQWtDLEVBQUU7SUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxDQUFDLGlCQUFpQixDQUN2QixJQUFJLEVBQ0osU0FBUyxFQUNULFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDMUIsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBeUI7SUFDbEUsc0VBQXNFO0lBQ3RFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsVUFBc0I7SUFFdEIsT0FBTyxDQUFDLEdBQVcsRUFBRSxRQUFnQixFQUFFLFFBQWtCLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDMUUsVUFBVTthQUNQLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDbEMsU0FBUyxDQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUN2QyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQ2xELENBQUM7SUFDTixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxtQkFBMkI7SUFDbkUsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsSUFBSSxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxNQUFNLE1BQU0sR0FBRyxHQUFHLG1CQUFtQixJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgaTE4bmV4dFhockJhY2tlbmQgZnJvbSAnaTE4bmV4dC14aHItYmFja2VuZCc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblJlc291cmNlcyB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLXJlc291cmNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0SW5pdChcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgc2VydmVyUmVxdWVzdE9yaWdpbjogc3RyaW5nXG4pOiAoKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnaTE4bicpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGxldCBpMThuZXh0Q29uZmlnOiBpMThuZXh0LkluaXRPcHRpb25zID0ge1xuICAgICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgICAgZGVidWc6IGNvbmZpZy5pMThuLmRlYnVnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICAgIGkxOG5leHQudXNlKGkxOG5leHRYaHJCYWNrZW5kKTtcbiAgICAgICAgY29uc3QgbG9hZFBhdGggPSBnZXRMb2FkUGF0aChcbiAgICAgICAgICBjb25maWcuaTE4bi5iYWNrZW5kLmxvYWRQYXRoLFxuICAgICAgICAgIHNlcnZlclJlcXVlc3RPcmlnaW5cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYmFja2VuZCA9IHtcbiAgICAgICAgICBsb2FkUGF0aCxcbiAgICAgICAgICBhamF4OiBpMThuZXh0R2V0SHR0cENsaWVudChodHRwQ2xpZW50KSxcbiAgICAgICAgfTtcbiAgICAgICAgaTE4bmV4dENvbmZpZyA9IHsgLi4uaTE4bmV4dENvbmZpZywgYmFja2VuZCB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaTE4bmV4dC5pbml0KGkxOG5leHRDb25maWcsICgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3QgdXNlIGkxOG5leHQncyAncmVzb3VyY2VzJyBjb25maWcga2V5IGZvciBhZGRpbmcgc3RhdGljIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgLy8gYmVjYXVzZSBpdCB3aWxsIGRpc2FibGUgbG9hZGluZyBjaHVua3MgZnJvbSBiYWNrZW5kLiBXZSBhZGQgcmVzb3VyY2VzIGhlcmUsIGluIHRoZSBpbml0J3MgY2FsbGJhY2suXG4gICAgICAgIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMoY29uZmlnLmkxOG4ucmVzb3VyY2VzKTtcbiAgICAgICAgc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaTE4bmV4dEFkZFRyYW5zbGF0aW9ucyhyZXNvdXJjZXM6IFRyYW5zbGF0aW9uUmVzb3VyY2VzID0ge30pIHtcbiAgT2JqZWN0LmtleXMocmVzb3VyY2VzKS5mb3JFYWNoKGxhbmcgPT4ge1xuICAgIE9iamVjdC5rZXlzKHJlc291cmNlc1tsYW5nXSkuZm9yRWFjaChjaHVua05hbWUgPT4ge1xuICAgICAgaTE4bmV4dC5hZGRSZXNvdXJjZUJ1bmRsZShcbiAgICAgICAgbGFuZyxcbiAgICAgICAgY2h1bmtOYW1lLFxuICAgICAgICByZXNvdXJjZXNbbGFuZ11bY2h1bmtOYW1lXSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzeW5jSTE4bmV4dFdpdGhTaXRlQ29udGV4dChsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gIC8vIGFsd2F5cyB1cGRhdGUgbGFuZ3VhZ2Ugb2YgaTE4bmV4dCBvbiBzaXRlIGNvbnRleHQgKGxhbmd1YWdlKSBjaGFuZ2VcbiAgbGFuZ3VhZ2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKGxhbmcgPT4gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZShsYW5nKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIGFwcHJvcHJpYXRlIGZvciBpMThuZXh0IHRvIG1ha2UgaHR0cCBjYWxscyBmb3IgSlNPTiBmaWxlcy5cbiAqIFNlZSBkb2NzIGZvciBgaTE4bmV4dC14aHItYmFja2VuZGA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQteGhyLWJhY2tlbmQjYmFja2VuZC1vcHRpb25zXG4gKlxuICogSXQgdXNlcyBBbmd1bGFyIEh0dHBDbGllbnQgdW5kZXIgdGhlIGhvb2QsIHNvIGl0IHdvcmtzIGluIFNTUi5cbiAqIEBwYXJhbSBodHRwQ2xpZW50IEFuZ3VsYXIgaHR0cCBjbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRHZXRIdHRwQ2xpZW50KFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4pOiAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBkYXRhOiBvYmplY3QpID0+IHZvaWQge1xuICByZXR1cm4gKHVybDogc3RyaW5nLCBfb3B0aW9uczogb2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIF9kYXRhOiBvYmplY3QpID0+IHtcbiAgICBodHRwQ2xpZW50XG4gICAgICAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiBjYWxsYmFjayhkYXRhLCB7IHN0YXR1czogMjAwIH0pLFxuICAgICAgICBlcnJvciA9PiBjYWxsYmFjayhudWxsLCB7IHN0YXR1czogZXJyb3Iuc3RhdHVzIH0pXG4gICAgICApO1xuICB9O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSByZWxhdGl2ZSBwYXRoIHRvIHRoZSBhYnNvbHV0ZSBvbmUgaW4gU1NSLCB1c2luZyB0aGUgc2VydmVyIHJlcXVlc3QncyBvcmlnaW4uXG4gKiBJdCdzIG5lZWRlZCwgYmVjYXVzZSBBbmd1bGFyIFVuaXZlcnNhbCBkb2Vzbid0IHN1cHBvcnQgcmVsYXRpdmUgVVJMcyBpbiBIdHRwQ2xpZW50LiBTZWUgQW5ndWxhciBpc3N1ZXM6XG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE5MjI0XG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvODU4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2FkUGF0aChwYXRoOiBzdHJpbmcsIHNlcnZlclJlcXVlc3RPcmlnaW46IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHNlcnZlclJlcXVlc3RPcmlnaW4gJiYgIXBhdGgubWF0Y2goL15odHRwKHMpPzpcXC9cXC8vKSkge1xuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMSk7XG4gICAgfVxuICAgIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDIpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBgJHtzZXJ2ZXJSZXF1ZXN0T3JpZ2lufS8ke3BhdGh9YDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuIl19
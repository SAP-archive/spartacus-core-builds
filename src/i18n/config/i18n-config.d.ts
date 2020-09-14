import { TranslationResources } from '../translation-resources';
import * as ɵngcc0 from '@angular/core';
export declare abstract class I18nConfig {
    i18n?: {
        /**
         * When there are missing translation resources for the active language, the fallback language will be used.
         */
        fallbackLang?: string | false;
        /**
         * Configuration for lazy loading of translation files.
         * For eager loading of translations please use config option `i18n.resources`
         */
        backend?: {
            /**
             * The path to JSON translations. It should contain placeholders:
             * - `{{lng}}` for language
             * - `{{ns}}` for the name of chunk.
             *
             * Example:
             * `assets/i18n-assets/{{lng}}/{{ns}}.json`
             */
            loadPath?: string;
        };
        /**
         * Reference to translation resources that are eagerly bundled with JS app.
         * For lazy loading of translations please use config option `i18n.backend` instead.
         */
        resources?: TranslationResources;
        /**
         * Logs i18n events (like loading translation resources) to the console. Don't use in production!
         */
        debug?: boolean;
        /**
         * Mapping that assigns keys' namespaces to specific chunks. The main purpose of chunks is to lazy load them.
         */
        chunks?: {
            [chunk: string]: string[];
        };
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jb25maWcuZC50cyIsInNvdXJjZXMiOlsiaTE4bi1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGlvblJlc291cmNlcyB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLXJlc291cmNlcyc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBJMThuQ29uZmlnIHtcbiAgICBpMThuPzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0aGVyZSBhcmUgbWlzc2luZyB0cmFuc2xhdGlvbiByZXNvdXJjZXMgZm9yIHRoZSBhY3RpdmUgbGFuZ3VhZ2UsIHRoZSBmYWxsYmFjayBsYW5ndWFnZSB3aWxsIGJlIHVzZWQuXG4gICAgICAgICAqL1xuICAgICAgICBmYWxsYmFja0xhbmc/OiBzdHJpbmcgfCBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3VyYXRpb24gZm9yIGxhenkgbG9hZGluZyBvZiB0cmFuc2xhdGlvbiBmaWxlcy5cbiAgICAgICAgICogRm9yIGVhZ2VyIGxvYWRpbmcgb2YgdHJhbnNsYXRpb25zIHBsZWFzZSB1c2UgY29uZmlnIG9wdGlvbiBgaTE4bi5yZXNvdXJjZXNgXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZW5kPzoge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgcGF0aCB0byBKU09OIHRyYW5zbGF0aW9ucy4gSXQgc2hvdWxkIGNvbnRhaW4gcGxhY2Vob2xkZXJzOlxuICAgICAgICAgICAgICogLSBge3tsbmd9fWAgZm9yIGxhbmd1YWdlXG4gICAgICAgICAgICAgKiAtIGB7e25zfX1gIGZvciB0aGUgbmFtZSBvZiBjaHVuay5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBFeGFtcGxlOlxuICAgICAgICAgICAgICogYGFzc2V0cy9pMThuLWFzc2V0cy97e2xuZ319L3t7bnN9fS5qc29uYFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsb2FkUGF0aD86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0cmFuc2xhdGlvbiByZXNvdXJjZXMgdGhhdCBhcmUgZWFnZXJseSBidW5kbGVkIHdpdGggSlMgYXBwLlxuICAgICAgICAgKiBGb3IgbGF6eSBsb2FkaW5nIG9mIHRyYW5zbGF0aW9ucyBwbGVhc2UgdXNlIGNvbmZpZyBvcHRpb24gYGkxOG4uYmFja2VuZGAgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlcz86IFRyYW5zbGF0aW9uUmVzb3VyY2VzO1xuICAgICAgICAvKipcbiAgICAgICAgICogTG9ncyBpMThuIGV2ZW50cyAobGlrZSBsb2FkaW5nIHRyYW5zbGF0aW9uIHJlc291cmNlcykgdG8gdGhlIGNvbnNvbGUuIERvbid0IHVzZSBpbiBwcm9kdWN0aW9uIVxuICAgICAgICAgKi9cbiAgICAgICAgZGVidWc/OiBib29sZWFuO1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFwcGluZyB0aGF0IGFzc2lnbnMga2V5cycgbmFtZXNwYWNlcyB0byBzcGVjaWZpYyBjaHVua3MuIFRoZSBtYWluIHB1cnBvc2Ugb2YgY2h1bmtzIGlzIHRvIGxhenkgbG9hZCB0aGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgY2h1bmtzPzoge1xuICAgICAgICAgICAgW2NodW5rOiBzdHJpbmddOiBzdHJpbmdbXTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIl19
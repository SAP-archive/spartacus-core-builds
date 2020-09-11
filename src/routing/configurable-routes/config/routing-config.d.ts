import { RoutesConfig } from '../routes-config';
import * as ɵngcc0 from '@angular/core';
export declare const enum RouteLoadStrategy {
    /**
     * Don't reload the data on navigation if it was loaded before
     */
    ONCE = "once",
    /**
     * Always reload the data on navigation
     */
    ALWAYS = "always"
}
export declare abstract class RoutingConfig {
    routing?: {
        /**
         * Configuration of semantic routes. Key is route's name. Value is the config specific to this route.
         */
        routes?: RoutesConfig;
        /**
         * When true, it closes the storefront for unauthorized users, except from routes that have individual config flag `protected: false`
         */
        protected?: boolean;
        /**
         * Global load strategy which is used as a fallback for loading data on each navigation
         */
        loadStrategy?: RouteLoadStrategy;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuZC50cyIsInNvdXJjZXMiOlsicm91dGluZy1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gUm91dGVMb2FkU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIERvbid0IHJlbG9hZCB0aGUgZGF0YSBvbiBuYXZpZ2F0aW9uIGlmIGl0IHdhcyBsb2FkZWQgYmVmb3JlXG4gICAgICovXG4gICAgT05DRSA9IFwib25jZVwiLFxuICAgIC8qKlxuICAgICAqIEFsd2F5cyByZWxvYWQgdGhlIGRhdGEgb24gbmF2aWdhdGlvblxuICAgICAqL1xuICAgIEFMV0FZUyA9IFwiYWx3YXlzXCJcbn1cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFJvdXRpbmdDb25maWcge1xuICAgIHJvdXRpbmc/OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9mIHNlbWFudGljIHJvdXRlcy4gS2V5IGlzIHJvdXRlJ3MgbmFtZS4gVmFsdWUgaXMgdGhlIGNvbmZpZyBzcGVjaWZpYyB0byB0aGlzIHJvdXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgcm91dGVzPzogUm91dGVzQ29uZmlnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCBpdCBjbG9zZXMgdGhlIHN0b3JlZnJvbnQgZm9yIHVuYXV0aG9yaXplZCB1c2VycywgZXhjZXB0IGZyb20gcm91dGVzIHRoYXQgaGF2ZSBpbmRpdmlkdWFsIGNvbmZpZyBmbGFnIGBwcm90ZWN0ZWQ6IGZhbHNlYFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkPzogYm9vbGVhbjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdsb2JhbCBsb2FkIHN0cmF0ZWd5IHdoaWNoIGlzIHVzZWQgYXMgYSBmYWxsYmFjayBmb3IgbG9hZGluZyBkYXRhIG9uIGVhY2ggbmF2aWdhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgbG9hZFN0cmF0ZWd5PzogUm91dGVMb2FkU3RyYXRlZ3k7XG4gICAgfTtcbn1cbiJdfQ==
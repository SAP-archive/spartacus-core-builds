import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class LoadingScopesService {
    protected config: OccConfig;
    constructor(config: OccConfig);
    /**
     * Aims to expand scopes based on loading scopes config.
     *
     * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
     *
     * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
     * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
     * It should apply also to implicit scopes (that are included by configuration).
     *
     * @param model
     * @param scopes
     */
    expand(model: string, scopes: string[]): string[];
    /**
     * Return maxAge for product scope in milliseconds
     *
     * @param model
     * @param scope
     */
    getMaxAge(model: string, scope: string): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoadingScopesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zY29wZXMuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsb2FkaW5nLXNjb3Blcy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2FkaW5nU2NvcGVzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBBaW1zIHRvIGV4cGFuZCBzY29wZXMgYmFzZWQgb24gbG9hZGluZyBzY29wZXMgY29uZmlnLlxuICAgICAqXG4gICAgICogSS5lLiBpZiAnZGV0YWlscycgc2NvcGUgaW5jbHVkZXMgJ2xpc3QnIHNjb3BlIGJ5IGNvbmZpZ3VyYXRpb24sIGl0J2xsIHJldHVybiBbJ2RldGFpbHMnLCAnbGlzdCddXG4gICAgICpcbiAgICAgKiBJZiBzY29wZSBkYXRhIG92ZXJsYXBzIHdpdGggZWFjaCBvdGhlciwgdGhlIGRhdGEgc2hvdWxkIGJlIG1lcmdlZCBpbiB0aGUgb3JkZXIgb2Ygc2NvcGVzIHByb3ZpZGVkLFxuICAgICAqIGkuZS4gdGhlIGxhc3Qgc2NvcGUgaXMgbWVyZ2VkIGxhc3QsIG92ZXJ3cml0aW5nIHBhcnRzIG9mIHRoZSBkYXRhIGFscmVhZHkgcHJvdmlkZWQgYnkgcHJlY2VkaW5nIHNjb3BlLlxuICAgICAqIEl0IHNob3VsZCBhcHBseSBhbHNvIHRvIGltcGxpY2l0IHNjb3BlcyAodGhhdCBhcmUgaW5jbHVkZWQgYnkgY29uZmlndXJhdGlvbikuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbW9kZWxcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgZXhwYW5kKG1vZGVsOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWF4QWdlIGZvciBwcm9kdWN0IHNjb3BlIGluIG1pbGxpc2Vjb25kc1xuICAgICAqXG4gICAgICogQHBhcmFtIG1vZGVsXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICovXG4gICAgZ2V0TWF4QWdlKG1vZGVsOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBudW1iZXI7XG59XG4iXX0=
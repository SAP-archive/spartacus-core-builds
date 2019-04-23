/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
var TranslationChunkService = /** @class */ (function () {
    function TranslationChunkService(config) {
        this.config = config;
        this.KEY_SEPARATOR = '.';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TranslationChunkService.prototype.getChunkNameForKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        var chunk = this.getChunkFromConfig(mainKey);
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    };
    /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    TranslationChunkService.prototype.getChunkFromConfig = /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    function (mainKey) {
        return (this.config.i18n &&
            this.config.i18n.chunks &&
            this.config.i18n.chunks[mainKey]);
    };
    TranslationChunkService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslationChunkService.ctorParameters = function () { return [
        { type: I18nConfig }
    ]; };
    return TranslationChunkService;
}());
export { TranslationChunkService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TranslationChunkService.prototype.KEY_SEPARATOR;
    /**
     * @type {?}
     * @protected
     */
    TranslationChunkService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxEO0lBRUUsaUNBQXNCLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFFckIsa0JBQWEsR0FBRyxHQUFHLENBQUM7SUFGSSxDQUFDOzs7OztJQUk1QyxvREFBa0I7Ozs7SUFBbEIsVUFBbUIsR0FBVzs7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztRQUU5QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0M7U0FDbkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLG9EQUFrQjs7Ozs7SUFBMUIsVUFBMkIsT0FBZTtRQUN4QyxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBRkYsVUFBVTs7SUF5Qm5CLDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksdUJBQXVCOzs7Ozs7SUFHbEMsZ0RBQXVDOzs7OztJQUYzQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBLRVlfU0VQQVJBVE9SID0gJy4nO1xuXG4gIGdldENodW5rTmFtZUZvcktleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWFpbktleSA9IChrZXkgfHwgJycpLnNwbGl0KHRoaXMuS0VZX1NFUEFSQVRPUilbMF07XG4gICAgY29uc3QgY2h1bmsgPSB0aGlzLmdldENodW5rRnJvbUNvbmZpZyhtYWluS2V5KTtcblxuICAgIGlmICghY2h1bmspIHtcbiAgICAgIHJldHVybiBtYWluS2V5OyAvLyBmYWxsYmFjayB0byBtYWluIGtleSBhcyBhIGNodW5rXG4gICAgfVxuICAgIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2h1bmtGcm9tQ29uZmlnKG1haW5LZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4gJiZcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4uY2h1bmtzICYmXG4gICAgICB0aGlzLmNvbmZpZy5pMThuLmNodW5rc1ttYWluS2V5XVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
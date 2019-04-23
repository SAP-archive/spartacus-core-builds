/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
export class TranslationChunkService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.KEY_SEPARATOR = '.';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getChunkNameForKey(key) {
        /** @type {?} */
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        const chunk = this.getChunkFromConfig(mainKey);
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    }
    /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    getChunkFromConfig(mainKey) {
        return (this.config.i18n &&
            this.config.i18n.chunks &&
            this.config.i18n.chunks[mainKey]);
    }
}
TranslationChunkService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslationChunkService.ctorParameters = () => [
    { type: I18nConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUVyQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUZJLENBQUM7Ozs7O0lBSTVDLGtCQUFrQixDQUFDLEdBQVc7O2NBQ3RCLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDbEQsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFFOUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sT0FBTyxDQUFDLENBQUMsa0NBQWtDO1NBQ25EO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxPQUFlO1FBQ3hDLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2pDLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUZGLFVBQVU7Ozs7Ozs7SUFNakIsZ0RBQXVDOzs7OztJQUYzQix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnKSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBLRVlfU0VQQVJBVE9SID0gJy4nO1xuXG4gIGdldENodW5rTmFtZUZvcktleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWFpbktleSA9IChrZXkgfHwgJycpLnNwbGl0KHRoaXMuS0VZX1NFUEFSQVRPUilbMF07XG4gICAgY29uc3QgY2h1bmsgPSB0aGlzLmdldENodW5rRnJvbUNvbmZpZyhtYWluS2V5KTtcblxuICAgIGlmICghY2h1bmspIHtcbiAgICAgIHJldHVybiBtYWluS2V5OyAvLyBmYWxsYmFjayB0byBtYWluIGtleSBhcyBhIGNodW5rXG4gICAgfVxuICAgIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2h1bmtGcm9tQ29uZmlnKG1haW5LZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4gJiZcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4uY2h1bmtzICYmXG4gICAgICB0aGlzLmNvbmZpZy5pMThuLmNodW5rc1ttYWluS2V5XVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
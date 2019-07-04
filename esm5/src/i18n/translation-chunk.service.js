/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
var TranslationChunkService = /** @class */ (function () {
    function TranslationChunkService(config) {
        var _this = this;
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        /** @type {?} */
        var chunks = (config.i18n && config.i18n.chunks) || {};
        Object.keys(chunks).forEach((/**
         * @param {?} chunk
         * @return {?}
         */
        function (chunk) {
            chunks[chunk].forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (_this.chunks.hasOwnProperty(key)) {
                    if (!_this.duplicates[key]) {
                        _this.duplicates[key] = [_this.chunks[key]];
                    }
                    _this.duplicates[key].push(chunk);
                }
                else {
                    _this.chunks[key] = chunk;
                }
            }));
        }));
        if (Object.keys(this.duplicates).length > 0 && isDevMode()) {
            this.warnDuplicates(this.duplicates);
        }
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
        var chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    TranslationChunkService.prototype.warnDuplicates = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        /** @type {?} */
        var dupes = [];
        Object.keys(items).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            dupes.push("* '" + key + "' found in chunks: " + items[key].join(', ') + ". Used '" + _this.chunks[key] + "." + key + "'.");
        }));
        console.warn("Duplicated keys has been found in the config of i18n chunks:\n" + dupes.join('\n'));
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
    TranslationChunkService.prototype.duplicates;
    /**
     * @type {?}
     * @protected
     */
    TranslationChunkService.prototype.chunks;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRDtJQUlFLGlDQUFzQixNQUFrQjtRQUF4QyxpQkFpQkM7UUFqQnFCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGOUIsZUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFvQjlCLGtCQUFhLEdBQUcsR0FBRyxDQUFDOztZQWxCL0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDM0M7b0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUlELG9EQUFrQjs7OztJQUFsQixVQUFtQixHQUFXOztZQUN0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLE9BQU8sQ0FBQyxDQUFDLGtDQUFrQztTQUNuRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sZ0RBQWM7Ozs7O0lBQXRCLFVBQXVCLEtBQWtDO1FBQXpELGlCQWNDOztZQWJPLEtBQUssR0FBYSxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRztZQUM1QixLQUFLLENBQUMsSUFBSSxDQUNSLFFBQU0sR0FBRywyQkFBc0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQ2QsR0FBRyxPQUFJLENBQ1osQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FDVixtRUFBaUUsS0FBSyxDQUFDLElBQUksQ0FDekUsSUFBSSxDQUNILENBQ0osQ0FBQztJQUNKLENBQUM7O2dCQWpERixVQUFVOzs7O2dCQUZGLFVBQVU7O0lBb0RuQiw4QkFBQztDQUFBLEFBbERELElBa0RDO1NBakRZLHVCQUF1Qjs7Ozs7O0lBQ2xDLDZDQUF1RDs7Ozs7SUFDdkQseUNBQWlEOzs7OztJQW9CakQsZ0RBQXVDOzs7OztJQW5CM0IseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZHVwbGljYXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XG4gIHByb3RlY3RlZCBjaHVua3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZykge1xuICAgIGNvbnN0IGNodW5rcyA9IChjb25maWcuaTE4biAmJiBjb25maWcuaTE4bi5jaHVua3MpIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGNodW5rcykuZm9yRWFjaChjaHVuayA9PiB7XG4gICAgICBjaHVua3NbY2h1bmtdLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2h1bmtzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZHVwbGljYXRlc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XSA9IFt0aGlzLmNodW5rc1trZXldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kdXBsaWNhdGVzW2tleV0ucHVzaChjaHVuayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XSA9IGNodW5rO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kdXBsaWNhdGVzKS5sZW5ndGggPiAwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLndhcm5EdXBsaWNhdGVzKHRoaXMuZHVwbGljYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSAnLic7XG5cbiAgZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYWluS2V5ID0gKGtleSB8fCAnJykuc3BsaXQodGhpcy5LRVlfU0VQQVJBVE9SKVswXTtcbiAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzICYmIHRoaXMuY2h1bmtzW21haW5LZXldO1xuXG4gICAgaWYgKCFjaHVuaykge1xuICAgICAgcmV0dXJuIG1haW5LZXk7IC8vIGZhbGxiYWNrIHRvIG1haW4ga2V5IGFzIGEgY2h1bmtcbiAgICB9XG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuRHVwbGljYXRlcyhpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9KTogdm9pZCB7XG4gICAgY29uc3QgZHVwZXM6IHN0cmluZ1tdID0gW107XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGR1cGVzLnB1c2goXG4gICAgICAgIGAqICcke2tleX0nIGZvdW5kIGluIGNodW5rczogJHtpdGVtc1trZXldLmpvaW4oJywgJyl9LiBVc2VkICcke1xuICAgICAgICAgIHRoaXMuY2h1bmtzW2tleV1cbiAgICAgICAgfS4ke2tleX0nLmBcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYER1cGxpY2F0ZWQga2V5cyBoYXMgYmVlbiBmb3VuZCBpbiB0aGUgY29uZmlnIG9mIGkxOG4gY2h1bmtzOlxcbiR7ZHVwZXMuam9pbihcbiAgICAgICAgJ1xcbidcbiAgICAgICl9YFxuICAgICk7XG4gIH1cbn1cbiJdfQ==
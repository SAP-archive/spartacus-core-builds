/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
export class TranslationChunkService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        /** @type {?} */
        const chunks = (config.i18n && config.i18n.chunks) || {};
        Object.keys(chunks).forEach((/**
         * @param {?} chunk
         * @return {?}
         */
        chunk => {
            chunks[chunk].forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                if (this.chunks.hasOwnProperty(key)) {
                    if (!this.duplicates[key]) {
                        this.duplicates[key] = [this.chunks[key]];
                    }
                    this.duplicates[key].push(chunk);
                }
                else {
                    this.chunks[key] = chunk;
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
    getChunkNameForKey(key) {
        /** @type {?} */
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        const chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    warnDuplicates(items) {
        /** @type {?} */
        const dupes = [];
        Object.keys(items).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            dupes.push(`* '${key}' found in chunks: ${items[key].join(', ')}. Used '${this.chunks[key]}.${key}'.`);
        }));
        console.warn(`Duplicated keys has been found in the config of i18n chunks:\n${dupes.join('\n')}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQXNCLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGOUIsZUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFvQjlCLGtCQUFhLEdBQUcsR0FBRyxDQUFDOztjQWxCL0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzNDO29CQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDMUI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxrQkFBa0IsQ0FBQyxHQUFXOztjQUN0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ2xELEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLE9BQU8sQ0FBQyxDQUFDLGtDQUFrQztTQUNuRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQWtDOztjQUNqRCxLQUFLLEdBQWEsRUFBRTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixLQUFLLENBQUMsSUFBSSxDQUNSLE1BQU0sR0FBRyxzQkFBc0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2pCLElBQUksR0FBRyxJQUFJLENBQ1osQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FDVixpRUFBaUUsS0FBSyxDQUFDLElBQUksQ0FDekUsSUFBSSxDQUNMLEVBQUUsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7O1lBakRGLFVBQVU7Ozs7WUFGRixVQUFVOzs7Ozs7O0lBSWpCLDZDQUF1RDs7Ozs7SUFDdkQseUNBQWlEOzs7OztJQW9CakQsZ0RBQXVDOzs7OztJQW5CM0IseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZHVwbGljYXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XG4gIHByb3RlY3RlZCBjaHVua3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZykge1xuICAgIGNvbnN0IGNodW5rcyA9IChjb25maWcuaTE4biAmJiBjb25maWcuaTE4bi5jaHVua3MpIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGNodW5rcykuZm9yRWFjaChjaHVuayA9PiB7XG4gICAgICBjaHVua3NbY2h1bmtdLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2h1bmtzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZHVwbGljYXRlc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XSA9IFt0aGlzLmNodW5rc1trZXldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kdXBsaWNhdGVzW2tleV0ucHVzaChjaHVuayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XSA9IGNodW5rO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kdXBsaWNhdGVzKS5sZW5ndGggPiAwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLndhcm5EdXBsaWNhdGVzKHRoaXMuZHVwbGljYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSAnLic7XG5cbiAgZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYWluS2V5ID0gKGtleSB8fCAnJykuc3BsaXQodGhpcy5LRVlfU0VQQVJBVE9SKVswXTtcbiAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzICYmIHRoaXMuY2h1bmtzW21haW5LZXldO1xuXG4gICAgaWYgKCFjaHVuaykge1xuICAgICAgcmV0dXJuIG1haW5LZXk7IC8vIGZhbGxiYWNrIHRvIG1haW4ga2V5IGFzIGEgY2h1bmtcbiAgICB9XG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuRHVwbGljYXRlcyhpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9KTogdm9pZCB7XG4gICAgY29uc3QgZHVwZXM6IHN0cmluZ1tdID0gW107XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGR1cGVzLnB1c2goXG4gICAgICAgIGAqICcke2tleX0nIGZvdW5kIGluIGNodW5rczogJHtpdGVtc1trZXldLmpvaW4oJywgJyl9LiBVc2VkICcke1xuICAgICAgICAgIHRoaXMuY2h1bmtzW2tleV1cbiAgICAgICAgfS4ke2tleX0nLmBcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYER1cGxpY2F0ZWQga2V5cyBoYXMgYmVlbiBmb3VuZCBpbiB0aGUgY29uZmlnIG9mIGkxOG4gY2h1bmtzOlxcbiR7ZHVwZXMuam9pbihcbiAgICAgICAgJ1xcbidcbiAgICAgICl9YFxuICAgICk7XG4gIH1cbn1cbiJdfQ==
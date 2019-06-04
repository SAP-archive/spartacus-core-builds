/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
        Object.keys(config.i18n.chunks).forEach((/**
         * @param {?} chunk
         * @return {?}
         */
        chunk => {
            config.i18n.chunks[chunk].forEach((/**
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
        if (Object.keys(this.duplicates).length > 0 && !this.config.production) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUY5QixlQUFVLEdBQWdDLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQW1COUIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFqQnJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDM0M7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBSUQsa0JBQWtCLENBQUMsR0FBVzs7Y0FDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVqRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0M7U0FDbkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFrQzs7Y0FDakQsS0FBSyxHQUFhLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsS0FBSyxDQUFDLElBQUksQ0FDUixNQUFNLEdBQUcsc0JBQXNCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNqQixJQUFJLEdBQUcsSUFBSSxDQUNaLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLEtBQUssQ0FBQyxJQUFJLENBQ3pFLElBQUksQ0FDTCxFQUFFLENBQ0osQ0FBQztJQUNKLENBQUM7OztZQWhERixVQUFVOzs7O1lBRkYsVUFBVTs7Ozs7OztJQUlqQiw2Q0FBdUQ7Ozs7O0lBQ3ZELHlDQUFpRDs7Ozs7SUFtQmpELGdEQUF1Qzs7Ozs7SUFsQjNCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB7XG4gIHByb3RlY3RlZCBkdXBsaWNhdGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7fTtcbiAgcHJvdGVjdGVkIGNodW5rczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnKSB7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnLmkxOG4uY2h1bmtzKS5mb3JFYWNoKGNodW5rID0+IHtcbiAgICAgIGNvbmZpZy5pMThuLmNodW5rc1tjaHVua10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jaHVua3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICghdGhpcy5kdXBsaWNhdGVzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZHVwbGljYXRlc1trZXldID0gW3RoaXMuY2h1bmtzW2tleV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XS5wdXNoKGNodW5rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNodW5rc1trZXldID0gY2h1bms7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmR1cGxpY2F0ZXMpLmxlbmd0aCA+IDAgJiYgIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIHRoaXMud2FybkR1cGxpY2F0ZXModGhpcy5kdXBsaWNhdGVzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgS0VZX1NFUEFSQVRPUiA9ICcuJztcblxuICBnZXRDaHVua05hbWVGb3JLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1haW5LZXkgPSAoa2V5IHx8ICcnKS5zcGxpdCh0aGlzLktFWV9TRVBBUkFUT1IpWzBdO1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3MgJiYgdGhpcy5jaHVua3NbbWFpbktleV07XG5cbiAgICBpZiAoIWNodW5rKSB7XG4gICAgICByZXR1cm4gbWFpbktleTsgLy8gZmFsbGJhY2sgdG8gbWFpbiBrZXkgYXMgYSBjaHVua1xuICAgIH1cbiAgICByZXR1cm4gY2h1bms7XG4gIH1cblxuICBwcml2YXRlIHdhcm5EdXBsaWNhdGVzKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0pOiB2b2lkIHtcbiAgICBjb25zdCBkdXBlczogc3RyaW5nW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZHVwZXMucHVzaChcbiAgICAgICAgYCogJyR7a2V5fScgZm91bmQgaW4gY2h1bmtzOiAke2l0ZW1zW2tleV0uam9pbignLCAnKX0uIFVzZWQgJyR7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XVxuICAgICAgICB9LiR7a2V5fScuYFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgRHVwbGljYXRlZCBrZXlzIGhhcyBiZWVuIGZvdW5kIGluIHRoZSBjb25maWcgb2YgaTE4biBjaHVua3M6XFxuJHtkdXBlcy5qb2luKFxuICAgICAgICAnXFxuJ1xuICAgICAgKX1gXG4gICAgKTtcbiAgfVxufVxuIl19
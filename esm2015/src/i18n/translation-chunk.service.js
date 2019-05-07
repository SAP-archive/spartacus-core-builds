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
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        Object.keys(config.i18n.chunks).forEach(chunk => {
            config.i18n.chunks[chunk].forEach(key => {
                if (this.chunks.hasOwnProperty(key)) {
                    if (!this.duplicates[key]) {
                        this.duplicates[key] = [this.chunks[key]];
                    }
                    this.duplicates[key].push(chunk);
                }
                else {
                    this.chunks[key] = chunk;
                }
            });
        });
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
        Object.keys(items).forEach(key => {
            dupes.push(`* '${key}' found in chunks: ${items[key].join(', ')}. Used '${this.chunks[key]}.${key}'.`);
        });
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
     * @private
     */
    TranslationChunkService.prototype.duplicates;
    /**
     * @type {?}
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUZoQyxlQUFVLEdBQWdDLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQW1CNUIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFqQnJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDM0M7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBSUQsa0JBQWtCLENBQUMsR0FBVzs7Y0FDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztjQUNsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVqRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0M7U0FDbkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFrQzs7Y0FDakQsS0FBSyxHQUFhLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsS0FBSyxDQUFDLElBQUksQ0FDUixNQUFNLEdBQUcsc0JBQXNCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNqQixJQUFJLEdBQUcsSUFBSSxDQUNaLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxJQUFJLENBQ1YsaUVBQWlFLEtBQUssQ0FBQyxJQUFJLENBQ3pFLElBQUksQ0FDTCxFQUFFLENBQ0osQ0FBQztJQUNKLENBQUM7OztZQWhERixVQUFVOzs7O1lBRkYsVUFBVTs7Ozs7OztJQUlqQiw2Q0FBcUQ7Ozs7O0lBQ3JELHlDQUErQzs7Ozs7SUFtQi9DLGdEQUF1Qzs7Ozs7SUFsQjNCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB7XG4gIHByaXZhdGUgZHVwbGljYXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XG4gIHByaXZhdGUgY2h1bmtzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWcpIHtcbiAgICBPYmplY3Qua2V5cyhjb25maWcuaTE4bi5jaHVua3MpLmZvckVhY2goY2h1bmsgPT4ge1xuICAgICAgY29uZmlnLmkxOG4uY2h1bmtzW2NodW5rXS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNodW5rcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmR1cGxpY2F0ZXNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5kdXBsaWNhdGVzW2tleV0gPSBbdGhpcy5jaHVua3Nba2V5XV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHVwbGljYXRlc1trZXldLnB1c2goY2h1bmspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2h1bmtzW2tleV0gPSBjaHVuaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZHVwbGljYXRlcykubGVuZ3RoID4gMCAmJiAhdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgdGhpcy53YXJuRHVwbGljYXRlcyh0aGlzLmR1cGxpY2F0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBLRVlfU0VQQVJBVE9SID0gJy4nO1xuXG4gIGdldENodW5rTmFtZUZvcktleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWFpbktleSA9IChrZXkgfHwgJycpLnNwbGl0KHRoaXMuS0VZX1NFUEFSQVRPUilbMF07XG4gICAgY29uc3QgY2h1bmsgPSB0aGlzLmNodW5rcyAmJiB0aGlzLmNodW5rc1ttYWluS2V5XTtcblxuICAgIGlmICghY2h1bmspIHtcbiAgICAgIHJldHVybiBtYWluS2V5OyAvLyBmYWxsYmFjayB0byBtYWluIGtleSBhcyBhIGNodW5rXG4gICAgfVxuICAgIHJldHVybiBjaHVuaztcbiAgfVxuXG4gIHByaXZhdGUgd2FybkR1cGxpY2F0ZXMoaXRlbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSk6IHZvaWQge1xuICAgIGNvbnN0IGR1cGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBkdXBlcy5wdXNoKFxuICAgICAgICBgKiAnJHtrZXl9JyBmb3VuZCBpbiBjaHVua3M6ICR7aXRlbXNba2V5XS5qb2luKCcsICcpfS4gVXNlZCAnJHtcbiAgICAgICAgICB0aGlzLmNodW5rc1trZXldXG4gICAgICAgIH0uJHtrZXl9Jy5gXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBEdXBsaWNhdGVkIGtleXMgaGFzIGJlZW4gZm91bmQgaW4gdGhlIGNvbmZpZyBvZiBpMThuIGNodW5rczpcXG4ke2R1cGVzLmpvaW4oXG4gICAgICAgICdcXG4nXG4gICAgICApfWBcbiAgICApO1xuICB9XG59XG4iXX0=
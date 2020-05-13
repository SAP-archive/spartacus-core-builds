import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/i18n-config";
var TranslationChunkService = /** @class */ (function () {
    function TranslationChunkService(config) {
        var _this = this;
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        var chunks = (config.i18n && config.i18n.chunks) || {};
        Object.keys(chunks).forEach(function (chunk) {
            chunks[chunk].forEach(function (key) {
                if (_this.chunks.hasOwnProperty(key)) {
                    if (!_this.duplicates[key]) {
                        _this.duplicates[key] = [_this.chunks[key]];
                    }
                    _this.duplicates[key].push(chunk);
                }
                else {
                    _this.chunks[key] = chunk;
                }
            });
        });
        if (Object.keys(this.duplicates).length > 0 && isDevMode()) {
            this.warnDuplicates(this.duplicates);
        }
    }
    TranslationChunkService.prototype.getChunkNameForKey = function (key) {
        var mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        var chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    };
    TranslationChunkService.prototype.warnDuplicates = function (items) {
        var _this = this;
        var dupes = [];
        Object.keys(items).forEach(function (key) {
            dupes.push("* '" + key + "' found in chunks: " + items[key].join(', ') + ". Used '" + _this.chunks[key] + "." + key + "'.");
        });
        console.warn("Duplicated keys has been found in the config of i18n chunks:\n" + dupes.join('\n'));
    };
    TranslationChunkService.ctorParameters = function () { return [
        { type: I18nConfig }
    ]; };
    TranslationChunkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslationChunkService_Factory() { return new TranslationChunkService(i0.ɵɵinject(i1.I18nConfig)); }, token: TranslationChunkService, providedIn: "root" });
    TranslationChunkService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], TranslationChunkService);
    return TranslationChunkService;
}());
export { TranslationChunkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBS2xEO0lBR0UsaUNBQXNCLE1BQWtCO1FBQXhDLGlCQWlCQztRQWpCcUIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUY5QixlQUFVLEdBQWdDLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQW9COUIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFsQnJDLElBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3hCLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUMzQztvQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFJRCxvREFBa0IsR0FBbEIsVUFBbUIsR0FBVztRQUM1QixJQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsQ0FBQyxrQ0FBa0M7U0FDbkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxnREFBYyxHQUF0QixVQUF1QixLQUFrQztRQUF6RCxpQkFjQztRQWJDLElBQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDN0IsS0FBSyxDQUFDLElBQUksQ0FDUixRQUFNLEdBQUcsMkJBQXNCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUNsRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUNkLEdBQUcsT0FBSSxDQUNaLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxJQUFJLENBQ1YsbUVBQWlFLEtBQUssQ0FBQyxJQUFJLENBQ3pFLElBQUksQ0FDSCxDQUNKLENBQUM7SUFDSixDQUFDOztnQkE3QzZCLFVBQVU7OztJQUg3Qix1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQWlEbkM7a0NBdkREO0NBdURDLEFBakRELElBaURDO1NBakRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGR1cGxpY2F0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHt9O1xuICBwcm90ZWN0ZWQgY2h1bmtzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWcpIHtcbiAgICBjb25zdCBjaHVua3MgPSAoY29uZmlnLmkxOG4gJiYgY29uZmlnLmkxOG4uY2h1bmtzKSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhjaHVua3MpLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjaHVua3NbY2h1bmtdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jaHVua3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICghdGhpcy5kdXBsaWNhdGVzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuZHVwbGljYXRlc1trZXldID0gW3RoaXMuY2h1bmtzW2tleV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XS5wdXNoKGNodW5rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNodW5rc1trZXldID0gY2h1bms7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmR1cGxpY2F0ZXMpLmxlbmd0aCA+IDAgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMud2FybkR1cGxpY2F0ZXModGhpcy5kdXBsaWNhdGVzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgS0VZX1NFUEFSQVRPUiA9ICcuJztcblxuICBnZXRDaHVua05hbWVGb3JLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1haW5LZXkgPSAoa2V5IHx8ICcnKS5zcGxpdCh0aGlzLktFWV9TRVBBUkFUT1IpWzBdO1xuICAgIGNvbnN0IGNodW5rID0gdGhpcy5jaHVua3MgJiYgdGhpcy5jaHVua3NbbWFpbktleV07XG5cbiAgICBpZiAoIWNodW5rKSB7XG4gICAgICByZXR1cm4gbWFpbktleTsgLy8gZmFsbGJhY2sgdG8gbWFpbiBrZXkgYXMgYSBjaHVua1xuICAgIH1cbiAgICByZXR1cm4gY2h1bms7XG4gIH1cblxuICBwcml2YXRlIHdhcm5EdXBsaWNhdGVzKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0pOiB2b2lkIHtcbiAgICBjb25zdCBkdXBlczogc3RyaW5nW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBkdXBlcy5wdXNoKFxuICAgICAgICBgKiAnJHtrZXl9JyBmb3VuZCBpbiBjaHVua3M6ICR7aXRlbXNba2V5XS5qb2luKCcsICcpfS4gVXNlZCAnJHtcbiAgICAgICAgICB0aGlzLmNodW5rc1trZXldXG4gICAgICAgIH0uJHtrZXl9Jy5gXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBEdXBsaWNhdGVkIGtleXMgaGFzIGJlZW4gZm91bmQgaW4gdGhlIGNvbmZpZyBvZiBpMThuIGNodW5rczpcXG4ke2R1cGVzLmpvaW4oXG4gICAgICAgICdcXG4nXG4gICAgICApfWBcbiAgICApO1xuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
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
    TranslationChunkService = __decorate([
        Injectable()
    ], TranslationChunkService);
    return TranslationChunkService;
}());
export { TranslationChunkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRDtJQUdFLGlDQUFzQixNQUFrQjtRQUF4QyxpQkFpQkM7UUFqQnFCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGOUIsZUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFvQjlCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBbEJyQyxJQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDM0M7b0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBSUQsb0RBQWtCLEdBQWxCLFVBQW1CLEdBQVc7UUFDNUIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sT0FBTyxDQUFDLENBQUMsa0NBQWtDO1NBQ25EO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sZ0RBQWMsR0FBdEIsVUFBdUIsS0FBa0M7UUFBekQsaUJBY0M7UUFiQyxJQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQzVCLEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBTSxHQUFHLDJCQUFzQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FDZCxHQUFHLE9BQUksQ0FDWixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUNWLG1FQUFpRSxLQUFLLENBQUMsSUFBSSxDQUN6RSxJQUFJLENBQ0gsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7Z0JBN0M2QixVQUFVOztJQUg3Qix1QkFBdUI7UUFEbkMsVUFBVSxFQUFFO09BQ0EsdUJBQXVCLENBaURuQztJQUFELDhCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FqRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZHVwbGljYXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge307XG4gIHByb3RlY3RlZCBjaHVua3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZykge1xuICAgIGNvbnN0IGNodW5rcyA9IChjb25maWcuaTE4biAmJiBjb25maWcuaTE4bi5jaHVua3MpIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKGNodW5rcykuZm9yRWFjaChjaHVuayA9PiB7XG4gICAgICBjaHVua3NbY2h1bmtdLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2h1bmtzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZHVwbGljYXRlc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XSA9IFt0aGlzLmNodW5rc1trZXldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kdXBsaWNhdGVzW2tleV0ucHVzaChjaHVuayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XSA9IGNodW5rO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kdXBsaWNhdGVzKS5sZW5ndGggPiAwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLndhcm5EdXBsaWNhdGVzKHRoaXMuZHVwbGljYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSAnLic7XG5cbiAgZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYWluS2V5ID0gKGtleSB8fCAnJykuc3BsaXQodGhpcy5LRVlfU0VQQVJBVE9SKVswXTtcbiAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzICYmIHRoaXMuY2h1bmtzW21haW5LZXldO1xuXG4gICAgaWYgKCFjaHVuaykge1xuICAgICAgcmV0dXJuIG1haW5LZXk7IC8vIGZhbGxiYWNrIHRvIG1haW4ga2V5IGFzIGEgY2h1bmtcbiAgICB9XG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuRHVwbGljYXRlcyhpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9KTogdm9pZCB7XG4gICAgY29uc3QgZHVwZXM6IHN0cmluZ1tdID0gW107XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGR1cGVzLnB1c2goXG4gICAgICAgIGAqICcke2tleX0nIGZvdW5kIGluIGNodW5rczogJHtpdGVtc1trZXldLmpvaW4oJywgJyl9LiBVc2VkICcke1xuICAgICAgICAgIHRoaXMuY2h1bmtzW2tleV1cbiAgICAgICAgfS4ke2tleX0nLmBcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYER1cGxpY2F0ZWQga2V5cyBoYXMgYmVlbiBmb3VuZCBpbiB0aGUgY29uZmlnIG9mIGkxOG4gY2h1bmtzOlxcbiR7ZHVwZXMuam9pbihcbiAgICAgICAgJ1xcbidcbiAgICAgICl9YFxuICAgICk7XG4gIH1cbn1cbiJdfQ==
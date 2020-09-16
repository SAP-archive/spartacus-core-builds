import { Injectable, isDevMode } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
import * as i0 from "@angular/core";
import * as i1 from "./config/i18n-config";
export class TranslationChunkService {
    constructor(config) {
        this.config = config;
        this.duplicates = {};
        this.chunks = {};
        this.KEY_SEPARATOR = '.';
        const chunks = (config.i18n && config.i18n.chunks) || {};
        Object.keys(chunks).forEach((chunk) => {
            chunks[chunk].forEach((key) => {
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
        if (Object.keys(this.duplicates).length > 0 && isDevMode()) {
            this.warnDuplicates(this.duplicates);
        }
    }
    getChunkNameForKey(key) {
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        const chunk = this.chunks && this.chunks[mainKey];
        if (!chunk) {
            return mainKey; // fallback to main key as a chunk
        }
        return chunk;
    }
    warnDuplicates(items) {
        const dupes = [];
        Object.keys(items).forEach((key) => {
            dupes.push(`* '${key}' found in chunks: ${items[key].join(', ')}. Used '${this.chunks[key]}.${key}'.`);
        });
        console.warn(`Duplicated keys has been found in the config of i18n chunks:\n${dupes.join('\n')}`);
    }
}
TranslationChunkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslationChunkService_Factory() { return new TranslationChunkService(i0.ɵɵinject(i1.I18nConfig)); }, token: TranslationChunkService, providedIn: "root" });
TranslationChunkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
TranslationChunkService.ctorParameters = () => [
    { type: I18nConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2kxOG4vdHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUtsRCxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBQXNCLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFGOUIsZUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFvQjlCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBbEJyQyxNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUMzQztvQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFJRCxrQkFBa0IsQ0FBQyxHQUFXO1FBQzVCLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLE9BQU8sQ0FBQyxDQUFDLGtDQUFrQztTQUNuRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFrQztRQUN2RCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUNSLE1BQU0sR0FBRyxzQkFBc0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2pCLElBQUksR0FBRyxJQUFJLENBQ1osQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLElBQUksQ0FDVixpRUFBaUUsS0FBSyxDQUFDLElBQUksQ0FDekUsSUFBSSxDQUNMLEVBQUUsQ0FDSixDQUFDO0lBQ0osQ0FBQzs7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB7XG4gIHByb3RlY3RlZCBkdXBsaWNhdGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7fTtcbiAgcHJvdGVjdGVkIGNodW5rczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnKSB7XG4gICAgY29uc3QgY2h1bmtzID0gKGNvbmZpZy5pMThuICYmIGNvbmZpZy5pMThuLmNodW5rcykgfHwge307XG4gICAgT2JqZWN0LmtleXMoY2h1bmtzKS5mb3JFYWNoKChjaHVuaykgPT4ge1xuICAgICAgY2h1bmtzW2NodW5rXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2h1bmtzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZHVwbGljYXRlc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmR1cGxpY2F0ZXNba2V5XSA9IFt0aGlzLmNodW5rc1trZXldXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kdXBsaWNhdGVzW2tleV0ucHVzaChjaHVuayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XSA9IGNodW5rO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kdXBsaWNhdGVzKS5sZW5ndGggPiAwICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLndhcm5EdXBsaWNhdGVzKHRoaXMuZHVwbGljYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSAnLic7XG5cbiAgZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYWluS2V5ID0gKGtleSB8fCAnJykuc3BsaXQodGhpcy5LRVlfU0VQQVJBVE9SKVswXTtcbiAgICBjb25zdCBjaHVuayA9IHRoaXMuY2h1bmtzICYmIHRoaXMuY2h1bmtzW21haW5LZXldO1xuXG4gICAgaWYgKCFjaHVuaykge1xuICAgICAgcmV0dXJuIG1haW5LZXk7IC8vIGZhbGxiYWNrIHRvIG1haW4ga2V5IGFzIGEgY2h1bmtcbiAgICB9XG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuRHVwbGljYXRlcyhpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9KTogdm9pZCB7XG4gICAgY29uc3QgZHVwZXM6IHN0cmluZ1tdID0gW107XG4gICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZHVwZXMucHVzaChcbiAgICAgICAgYCogJyR7a2V5fScgZm91bmQgaW4gY2h1bmtzOiAke2l0ZW1zW2tleV0uam9pbignLCAnKX0uIFVzZWQgJyR7XG4gICAgICAgICAgdGhpcy5jaHVua3Nba2V5XVxuICAgICAgICB9LiR7a2V5fScuYFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgRHVwbGljYXRlZCBrZXlzIGhhcyBiZWVuIGZvdW5kIGluIHRoZSBjb25maWcgb2YgaTE4biBjaHVua3M6XFxuJHtkdXBlcy5qb2luKFxuICAgICAgICAnXFxuJ1xuICAgICAgKX1gXG4gICAgKTtcbiAgfVxufVxuIl19
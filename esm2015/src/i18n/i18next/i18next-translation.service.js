import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import i18next from 'i18next';
import { Observable } from 'rxjs';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
let I18nextTranslationService = class I18nextTranslationService {
    constructor(config, translationChunk) {
        this.config = config;
        this.translationChunk = translationChunk;
        this.NON_BREAKING_SPACE = String.fromCharCode(160);
        this.NAMESPACE_SEPARATOR = ':';
    }
    translate(key, options = {}, whitespaceUntilLoaded = false) {
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        const chunkName = this.translationChunk.getChunkNameForKey(key);
        const namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable((subscriber) => {
            const translate = () => {
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(chunkName, () => {
                        if (!i18next.exists(namespacedKey, options)) {
                            this.reportMissingKey(key, chunkName);
                            subscriber.next(this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    });
                }
            };
            translate();
            i18next.on('languageChanged', translate);
            return () => i18next.off('languageChanged', translate);
        });
    }
    loadChunks(chunkNames) {
        return i18next.loadNamespaces(chunkNames);
    }
    /**
     * Returns a fallback value in case when the given key is missing
     * @param key
     */
    getFallbackValue(key) {
        return isDevMode() ? `[${key}]` : this.NON_BREAKING_SPACE;
    }
    reportMissingKey(key, chunkName) {
        if (isDevMode()) {
            console.warn(`Translation key missing '${key}' in the chunk '${chunkName}'`);
        }
    }
    getNamespacedKey(key, chunk) {
        return chunk + this.NAMESPACE_SEPARATOR + key;
    }
};
I18nextTranslationService.ctorParameters = () => [
    { type: I18nConfig },
    { type: TranslationChunkService }
];
I18nextTranslationService = __decorate([
    Injectable()
], I18nextTranslationService);
export { I18nextTranslationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUlwQyxZQUNZLE1BQWtCLEVBQ2xCLGdCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFMcEMsdUJBQWtCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1Qyx3QkFBbUIsR0FBRyxHQUFHLENBQUM7SUFLMUMsQ0FBQztJQUVKLFNBQVMsQ0FDUCxHQUFXLEVBQ1gsVUFBZSxFQUFFLEVBQ2pCLHdCQUFpQyxLQUFLO1FBRXRDLDhGQUE4RjtRQUM5RixzREFBc0Q7UUFFdEQsc0dBQXNHO1FBQ3RHLHVIQUF1SDtRQUN2SCx5RUFBeUU7UUFFekUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFNUQsT0FBTyxJQUFJLFVBQVUsQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzNDLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtvQkFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtxQkFBTTtvQkFDTCxJQUFJLHFCQUFxQixFQUFFO3dCQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3FCQUMxQztvQkFDRCxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzs0QkFDdEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt5QkFDdkQ7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNwRDtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQztZQUVGLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQTZCO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sZ0JBQWdCLENBQUMsR0FBVztRQUNwQyxPQUFPLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxTQUFpQjtRQUNyRCxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDViw0QkFBNEIsR0FBRyxtQkFBbUIsU0FBUyxHQUFHLENBQy9ELENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNqRCxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBOztZQW5FcUIsVUFBVTtZQUNBLHVCQUF1Qjs7QUFOMUMseUJBQXlCO0lBRHJDLFVBQVUsRUFBRTtHQUNBLHlCQUF5QixDQXdFckM7U0F4RVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgTk9OX0JSRUFLSU5HX1NQQUNFID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgTkFNRVNQQUNFX1NFUEFSQVRPUiA9ICc6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZVxuICApIHt9XG5cbiAgdHJhbnNsYXRlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueSA9IHt9LFxuICAgIHdoaXRlc3BhY2VVbnRpbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhlIGNodW5rIChvciBmYWlsZWQgdG8gbG9hZCksIHdlIHNob3VsZCBpbW1lZGlhdGVseSBlbWl0IHRoZSB2YWx1ZVxuICAgIC8vIChvciB0aGUgZmFsbGJhY2sgdmFsdWUgaW4gY2FzZSB0aGUga2V5IGlzIG1pc3NpbmcpLlxuXG4gICAgLy8gTW9yZW92ZXIsIHdlIFNIT1VMRCBlbWl0IGEgdmFsdWUgKG9yIGEgZmFsbGJhY2sgdmFsdWUpIHN5bmNocm9ub3VzbHkgKG5vdCBpbiBhIHByb21pc2Uvc2V0VGltZW91dCkuXG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSB0aGUgd2lsbCB0cmlnZ2VyIGFkZGl0aW9uYWwgZGVmZXJyZWQgY2hhbmdlIGRldGVjdGlvbiBpbiBhIHZpZXcgdGhhdCBjb25zdW1lcyB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSxcbiAgICAvLyB3aGljaCB0b2dldGhlciB3aXRoIGBzd2l0Y2hNYXBgIG9wZXJhdG9yIG1heSBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICBjb25zdCBjaHVua05hbWUgPSB0aGlzLnRyYW5zbGF0aW9uQ2h1bmsuZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleSk7XG4gICAgY29uc3QgbmFtZXNwYWNlZEtleSA9IHRoaXMuZ2V0TmFtZXNwYWNlZEtleShrZXksIGNodW5rTmFtZSk7XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoaTE4bmV4dC5leGlzdHMobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaTE4bmV4dC50KG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAod2hpdGVzcGFjZVVudGlsTG9hZGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5OT05fQlJFQUtJTkdfU1BBQ0UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpMThuZXh0LmxvYWROYW1lc3BhY2VzKGNodW5rTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpMThuZXh0LmV4aXN0cyhuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlcG9ydE1pc3NpbmdLZXkoa2V5LCBjaHVua05hbWUpO1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5nZXRGYWxsYmFja1ZhbHVlKG5hbWVzcGFjZWRLZXkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpMThuZXh0LnQobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cmFuc2xhdGUoKTtcbiAgICAgIGkxOG5leHQub24oJ2xhbmd1YWdlQ2hhbmdlZCcsIHRyYW5zbGF0ZSk7XG4gICAgICByZXR1cm4gKCkgPT4gaTE4bmV4dC5vZmYoJ2xhbmd1YWdlQ2hhbmdlZCcsIHRyYW5zbGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkQ2h1bmtzKGNodW5rTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gaTE4bmV4dC5sb2FkTmFtZXNwYWNlcyhjaHVua05hbWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZmFsbGJhY2sgdmFsdWUgaW4gY2FzZSB3aGVuIHRoZSBnaXZlbiBrZXkgaXMgbWlzc2luZ1xuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzRGV2TW9kZSgpID8gYFske2tleX1dYCA6IHRoaXMuTk9OX0JSRUFLSU5HX1NQQUNFO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nS2V5KGtleTogc3RyaW5nLCBjaHVua05hbWU6IHN0cmluZykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVHJhbnNsYXRpb24ga2V5IG1pc3NpbmcgJyR7a2V5fScgaW4gdGhlIGNodW5rICcke2NodW5rTmFtZX0nYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hbWVzcGFjZWRLZXkoa2V5OiBzdHJpbmcsIGNodW5rOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjaHVuayArIHRoaXMuTkFNRVNQQUNFX1NFUEFSQVRPUiArIGtleTtcbiAgfVxufVxuIl19
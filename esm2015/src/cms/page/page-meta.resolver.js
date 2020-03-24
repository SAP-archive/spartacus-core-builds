/**
 * Abstract class that can be used to resolve meta data for specific pages.
 * The `getScore` method is used to select the right resolver for a specific
 * page, based on a score. The score is calculated by the (non)matching page
 * type and page template.
 */
export class PageMetaResolver {
    /**
     * Returns the matching score for a resolver class, based on
     * the page type and page template.
     */
    getScore(page) {
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsZ0JBQWdCO0lBT3BDOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlc29sdmUgbWV0YSBkYXRhIGZvciBzcGVjaWZpYyBwYWdlcy5cbiAqIFRoZSBgZ2V0U2NvcmVgIG1ldGhvZCBpcyB1c2VkIHRvIHNlbGVjdCB0aGUgcmlnaHQgcmVzb2x2ZXIgZm9yIGEgc3BlY2lmaWNcbiAqIHBhZ2UsIGJhc2VkIG9uIGEgc2NvcmUuIFRoZSBzY29yZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSAobm9uKW1hdGNoaW5nIHBhZ2VcbiAqIHR5cGUgYW5kIHBhZ2UgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlTWV0YVJlc29sdmVyIHtcbiAgLyoqIFRoZSBgUGFnZVR5cGVgIGlzIHVzZWQgdG8gc2NvcmUgdGhlIChub24pbWF0Y2hpbmcgcGFnZSAqL1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG5cbiAgLyoqIFRoZSBwYWdlIHRlbXBsYXRlIGlzIHVzZWQgdG8gc2NvcmUgdGhlIChub24pbWF0Y2hpbmcgcGFnZSB0ZW1wbGF0ZSAqL1xuICBwYWdlVGVtcGxhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWF0Y2hpbmcgc2NvcmUgZm9yIGEgcmVzb2x2ZXIgY2xhc3MsIGJhc2VkIG9uXG4gICAqIHRoZSBwYWdlIHR5cGUgYW5kIHBhZ2UgdGVtcGxhdGUuXG4gICAqL1xuICBnZXRTY29yZShwYWdlOiBQYWdlKTogbnVtYmVyIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGlmICh0aGlzLnBhZ2VUeXBlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnR5cGUgPT09IHRoaXMucGFnZVR5cGUgPyAxIDogLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2VUZW1wbGF0ZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50ZW1wbGF0ZSA9PT0gdGhpcy5wYWdlVGVtcGxhdGUgPyAxIDogLTE7XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuIl19
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
    hasMatch(page) {
        return this.getScore(page) > 0;
    }
    getPriority(page) {
        return this.getScore(page);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsZ0JBQWdCO0lBT3BDOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWwvaGFuZGxlcic7XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXNvbHZlIG1ldGEgZGF0YSBmb3Igc3BlY2lmaWMgcGFnZXMuXG4gKiBUaGUgYGdldFNjb3JlYCBtZXRob2QgaXMgdXNlZCB0byBzZWxlY3QgdGhlIHJpZ2h0IHJlc29sdmVyIGZvciBhIHNwZWNpZmljXG4gKiBwYWdlLCBiYXNlZCBvbiBhIHNjb3JlLiBUaGUgc2NvcmUgaXMgY2FsY3VsYXRlZCBieSB0aGUgKG5vbiltYXRjaGluZyBwYWdlXG4gKiB0eXBlIGFuZCBwYWdlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIEhhbmRsZXIge1xuICAvKiogVGhlIGBQYWdlVHlwZWAgaXMgdXNlZCB0byBzY29yZSB0aGUgKG5vbiltYXRjaGluZyBwYWdlICovXG4gIHBhZ2VUeXBlOiBQYWdlVHlwZTtcblxuICAvKiogVGhlIHBhZ2UgdGVtcGxhdGUgaXMgdXNlZCB0byBzY29yZSB0aGUgKG5vbiltYXRjaGluZyBwYWdlIHRlbXBsYXRlICovXG4gIHBhZ2VUZW1wbGF0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGluZyBzY29yZSBmb3IgYSByZXNvbHZlciBjbGFzcywgYmFzZWQgb25cbiAgICogdGhlIHBhZ2UgdHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZS5cbiAgICovXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgaWYgKHRoaXMucGFnZVR5cGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudHlwZSA9PT0gdGhpcy5wYWdlVHlwZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnZVRlbXBsYXRlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnRlbXBsYXRlID09PSB0aGlzLnBhZ2VUZW1wbGF0ZSA/IDEgOiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG5cbiAgaGFzTWF0Y2gocGFnZTogUGFnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFNjb3JlKHBhZ2UpID4gMDtcbiAgfVxuXG4gIGdldFByaW9yaXR5KHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldFNjb3JlKHBhZ2UpO1xuICB9XG59XG4iXX0=
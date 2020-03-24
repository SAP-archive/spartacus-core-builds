/**
 * Abstract class that can be used to resolve meta data for specific pages.
 * The `getScore` method is used to select the right resolver for a specific
 * page, based on a score. The score is calculated by the (non)matching page
 * type and page template.
 */
var PageMetaResolver = /** @class */ (function () {
    function PageMetaResolver() {
    }
    /**
     * Returns the matching score for a resolver class, based on
     * the page type and page template.
     */
    PageMetaResolver.prototype.getScore = function (page) {
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    };
    return PageMetaResolver;
}());
export { PageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7R0FLRztBQUNIO0lBQUE7SUFxQkEsQ0FBQztJQWRDOzs7T0FHRztJQUNILG1DQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXNvbHZlIG1ldGEgZGF0YSBmb3Igc3BlY2lmaWMgcGFnZXMuXG4gKiBUaGUgYGdldFNjb3JlYCBtZXRob2QgaXMgdXNlZCB0byBzZWxlY3QgdGhlIHJpZ2h0IHJlc29sdmVyIGZvciBhIHNwZWNpZmljXG4gKiBwYWdlLCBiYXNlZCBvbiBhIHNjb3JlLiBUaGUgc2NvcmUgaXMgY2FsY3VsYXRlZCBieSB0aGUgKG5vbiltYXRjaGluZyBwYWdlXG4gKiB0eXBlIGFuZCBwYWdlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZU1ldGFSZXNvbHZlciB7XG4gIC8qKiBUaGUgYFBhZ2VUeXBlYCBpcyB1c2VkIHRvIHNjb3JlIHRoZSAobm9uKW1hdGNoaW5nIHBhZ2UgKi9cbiAgcGFnZVR5cGU6IFBhZ2VUeXBlO1xuXG4gIC8qKiBUaGUgcGFnZSB0ZW1wbGF0ZSBpcyB1c2VkIHRvIHNjb3JlIHRoZSAobm9uKW1hdGNoaW5nIHBhZ2UgdGVtcGxhdGUgKi9cbiAgcGFnZVRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hdGNoaW5nIHNjb3JlIGZvciBhIHJlc29sdmVyIGNsYXNzLCBiYXNlZCBvblxuICAgKiB0aGUgcGFnZSB0eXBlIGFuZCBwYWdlIHRlbXBsYXRlLlxuICAgKi9cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBpZiAodGhpcy5wYWdlVHlwZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50eXBlID09PSB0aGlzLnBhZ2VUeXBlID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlVGVtcGxhdGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudGVtcGxhdGUgPT09IHRoaXMucGFnZVRlbXBsYXRlID8gMSA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cbn1cbiJdfQ==
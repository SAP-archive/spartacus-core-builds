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
    PageMetaResolver.prototype.hasMatch = function (page) {
        return this.getScore(page) > 0;
    };
    PageMetaResolver.prototype.getPriority = function (page) {
        return this.getScore(page);
    };
    return PageMetaResolver;
}());
export { PageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7Ozs7R0FLRztBQUNIO0lBQUE7SUE2QkEsQ0FBQztJQXRCQzs7O09BR0c7SUFDSCxtQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLElBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBBcHBsaWNhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlc29sdmUgbWV0YSBkYXRhIGZvciBzcGVjaWZpYyBwYWdlcy5cbiAqIFRoZSBgZ2V0U2NvcmVgIG1ldGhvZCBpcyB1c2VkIHRvIHNlbGVjdCB0aGUgcmlnaHQgcmVzb2x2ZXIgZm9yIGEgc3BlY2lmaWNcbiAqIHBhZ2UsIGJhc2VkIG9uIGEgc2NvcmUuIFRoZSBzY29yZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSAobm9uKW1hdGNoaW5nIHBhZ2VcbiAqIHR5cGUgYW5kIHBhZ2UgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlTWV0YVJlc29sdmVyIGltcGxlbWVudHMgQXBwbGljYWJsZSB7XG4gIC8qKiBUaGUgYFBhZ2VUeXBlYCBpcyB1c2VkIHRvIHNjb3JlIHRoZSAobm9uKW1hdGNoaW5nIHBhZ2UgKi9cbiAgcGFnZVR5cGU6IFBhZ2VUeXBlO1xuXG4gIC8qKiBUaGUgcGFnZSB0ZW1wbGF0ZSBpcyB1c2VkIHRvIHNjb3JlIHRoZSAobm9uKW1hdGNoaW5nIHBhZ2UgdGVtcGxhdGUgKi9cbiAgcGFnZVRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hdGNoaW5nIHNjb3JlIGZvciBhIHJlc29sdmVyIGNsYXNzLCBiYXNlZCBvblxuICAgKiB0aGUgcGFnZSB0eXBlIGFuZCBwYWdlIHRlbXBsYXRlLlxuICAgKi9cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBpZiAodGhpcy5wYWdlVHlwZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50eXBlID09PSB0aGlzLnBhZ2VUeXBlID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlVGVtcGxhdGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudGVtcGxhdGUgPT09IHRoaXMucGFnZVRlbXBsYXRlID8gMSA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cblxuICBoYXNNYXRjaChwYWdlOiBQYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2NvcmUocGFnZSkgPiAwO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2NvcmUocGFnZSk7XG4gIH1cbn1cbiJdfQ==
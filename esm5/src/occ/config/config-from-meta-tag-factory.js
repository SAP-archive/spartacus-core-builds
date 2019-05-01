/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
export var OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/** @type {?} */
export var MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
/** @type {?} */
export var MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
export function occServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    var baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl: baseUrl } } }
        : {};
}
/**
 * @param {?} meta
 * @return {?}
 */
export function mediaServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    var baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl: baseUrl } } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    var metaTag = meta.getTag("name=\"" + name + "\"");
    return metaTag && metaTag.content;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZyb20tbWV0YS10YWctZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLEtBQU8sMEJBQTBCLEdBQUcsc0JBQXNCOztBQUNoRSxNQUFNLEtBQU8saUNBQWlDLEdBQUcsNEJBQTRCOztBQUM3RSxNQUFNLEtBQU8sNEJBQTRCLEdBQUcsd0JBQXdCOztBQUNwRSxNQUFNLEtBQU8sbUNBQW1DLEdBQzlDLDhCQUE4Qjs7Ozs7QUFFaEMsTUFBTSxVQUFVLGlDQUFpQyxDQUFDLElBQVU7O1FBQ3BELE9BQU8sR0FBRyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUM7SUFDbkUsT0FBTyxPQUFPLElBQUksT0FBTyxLQUFLLGlDQUFpQztRQUM3RCxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLEVBQUU7UUFDbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG1DQUFtQyxDQUFDLElBQVU7O1FBQ3RELE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUM7SUFDckUsT0FBTyxPQUFPLElBQUksT0FBTyxLQUFLLG1DQUFtQztRQUMvRCxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLEVBQUU7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLElBQVU7O1FBQzNDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVMsSUFBSSxPQUFHLENBQUM7SUFDN0MsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IE9DQ19CQVNFX1VSTF9NRVRBX1RBR19OQU1FID0gJ29jYy1iYWNrZW5kLWJhc2UtdXJsJztcbmV4cG9ydCBjb25zdCBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVIgPSAnT0NDX0JBQ0tFTkRfQkFTRV9VUkxfVkFMVUUnO1xuZXhwb3J0IGNvbnN0IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX05BTUUgPSAnbWVkaWEtYmFja2VuZC1iYXNlLXVybCc7XG5leHBvcnQgY29uc3QgTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVIgPVxuICAnTUVESUFfQkFDS0VORF9CQVNFX1VSTF9WQUxVRSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvY2NTZXJ2ZXJDb25maWdGcm9tTWV0YVRhZ0ZhY3RvcnkobWV0YTogTWV0YSk6IE9jY0NvbmZpZyB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRNZXRhVGFnQ29udGVudChPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSwgbWV0YSk7XG4gIHJldHVybiBiYXNlVXJsICYmIGJhc2VVcmwgIT09IE9DQ19CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUlxuICAgID8geyBiYWNrZW5kOiB7IG9jYzogeyBiYXNlVXJsIH0gfSB9XG4gICAgOiB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5KG1ldGE6IE1ldGEpOiBPY2NDb25maWcge1xuICBjb25zdCBiYXNlVXJsID0gZ2V0TWV0YVRhZ0NvbnRlbnQoTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSwgbWV0YSk7XG4gIHJldHVybiBiYXNlVXJsICYmIGJhc2VVcmwgIT09IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSXG4gICAgPyB7IGJhY2tlbmQ6IHsgbWVkaWE6IHsgYmFzZVVybCB9IH0gfVxuICAgIDoge307XG59XG5cbmZ1bmN0aW9uIGdldE1ldGFUYWdDb250ZW50KG5hbWU6IHN0cmluZywgbWV0YTogTWV0YSkge1xuICBjb25zdCBtZXRhVGFnID0gbWV0YS5nZXRUYWcoYG5hbWU9XCIke25hbWV9XCJgKTtcbiAgcmV0dXJuIG1ldGFUYWcgJiYgbWV0YVRhZy5jb250ZW50O1xufVxuIl19
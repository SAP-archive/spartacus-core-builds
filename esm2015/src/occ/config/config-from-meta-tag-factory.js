/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Meta } from '@angular/platform-browser';
import { provideConfigFactory } from '../../config/config.module';
/** @type {?} */
export const OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
export const OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/** @type {?} */
export const MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
/** @type {?} */
export const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
export function occServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl } } }
        : {};
}
/**
 * @param {?} meta
 * @return {?}
 */
export function mediaServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl } } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}
/**
 * @return {?}
 */
export function provideConfigFromMetaTags() {
    return [
        provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]),
        provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta]),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZyb20tbWV0YS10YWctZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHbEUsTUFBTSxPQUFPLDBCQUEwQixHQUFHLHNCQUFzQjs7QUFDaEUsTUFBTSxPQUFPLGlDQUFpQyxHQUFHLDRCQUE0Qjs7QUFDN0UsTUFBTSxPQUFPLDRCQUE0QixHQUFHLHdCQUF3Qjs7QUFDcEUsTUFBTSxPQUFPLG1DQUFtQyxHQUM5Qyw4QkFBOEI7Ozs7O0FBRWhDLE1BQU0sVUFBVSxpQ0FBaUMsQ0FBQyxJQUFVOztVQUNwRCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDO0lBQ25FLE9BQU8sT0FBTyxJQUFJLE9BQU8sS0FBSyxpQ0FBaUM7UUFDN0QsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtRQUNuQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUNBQW1DLENBQUMsSUFBVTs7VUFDdEQsT0FBTyxHQUFHLGlCQUFpQixDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQztJQUNyRSxPQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssbUNBQW1DO1FBQy9ELENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLElBQVU7O1VBQzNDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7SUFDN0MsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNwQyxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLHlCQUF5QjtJQUN2QyxPQUFPO1FBQ0wsb0JBQW9CLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxvQkFBb0IsQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xFLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IE9DQ19CQVNFX1VSTF9NRVRBX1RBR19OQU1FID0gJ29jYy1iYWNrZW5kLWJhc2UtdXJsJztcbmV4cG9ydCBjb25zdCBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVIgPSAnT0NDX0JBQ0tFTkRfQkFTRV9VUkxfVkFMVUUnO1xuZXhwb3J0IGNvbnN0IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX05BTUUgPSAnbWVkaWEtYmFja2VuZC1iYXNlLXVybCc7XG5leHBvcnQgY29uc3QgTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVIgPVxuICAnTUVESUFfQkFDS0VORF9CQVNFX1VSTF9WQUxVRSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvY2NTZXJ2ZXJDb25maWdGcm9tTWV0YVRhZ0ZhY3RvcnkobWV0YTogTWV0YSk6IE9jY0NvbmZpZyB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRNZXRhVGFnQ29udGVudChPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSwgbWV0YSk7XG4gIHJldHVybiBiYXNlVXJsICYmIGJhc2VVcmwgIT09IE9DQ19CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUlxuICAgID8geyBiYWNrZW5kOiB7IG9jYzogeyBiYXNlVXJsIH0gfSB9XG4gICAgOiB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5KG1ldGE6IE1ldGEpOiBPY2NDb25maWcge1xuICBjb25zdCBiYXNlVXJsID0gZ2V0TWV0YVRhZ0NvbnRlbnQoTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSwgbWV0YSk7XG4gIHJldHVybiBiYXNlVXJsICYmIGJhc2VVcmwgIT09IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSXG4gICAgPyB7IGJhY2tlbmQ6IHsgbWVkaWE6IHsgYmFzZVVybCB9IH0gfVxuICAgIDoge307XG59XG5cbmZ1bmN0aW9uIGdldE1ldGFUYWdDb250ZW50KG5hbWU6IHN0cmluZywgbWV0YTogTWV0YSkge1xuICBjb25zdCBtZXRhVGFnID0gbWV0YS5nZXRUYWcoYG5hbWU9XCIke25hbWV9XCJgKTtcbiAgcmV0dXJuIG1ldGFUYWcgJiYgbWV0YVRhZy5jb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpOiBQcm92aWRlcltdIHtcbiAgcmV0dXJuIFtcbiAgICBwcm92aWRlQ29uZmlnRmFjdG9yeShvY2NTZXJ2ZXJDb25maWdGcm9tTWV0YVRhZ0ZhY3RvcnksIFtNZXRhXSksXG4gICAgcHJvdmlkZUNvbmZpZ0ZhY3RvcnkobWVkaWFTZXJ2ZXJDb25maWdGcm9tTWV0YVRhZ0ZhY3RvcnksIFtNZXRhXSksXG4gIF07XG59XG4iXX0=
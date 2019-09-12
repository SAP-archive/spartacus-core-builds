/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Meta } from '@angular/platform-browser';
import { provideConfigFactory } from '../../config/config.module';
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
/**
 * @return {?}
 */
export function provideConfigFromMetaTags() {
    return [
        provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]),
        provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta]),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZyb20tbWV0YS10YWctZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHbEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLHNCQUFzQjs7QUFDaEUsTUFBTSxLQUFPLGlDQUFpQyxHQUFHLDRCQUE0Qjs7QUFDN0UsTUFBTSxLQUFPLDRCQUE0QixHQUFHLHdCQUF3Qjs7QUFDcEUsTUFBTSxLQUFPLG1DQUFtQyxHQUM5Qyw4QkFBOEI7Ozs7O0FBRWhDLE1BQU0sVUFBVSxpQ0FBaUMsQ0FBQyxJQUFVOztRQUNwRCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDO0lBQ25FLE9BQU8sT0FBTyxJQUFJLE9BQU8sS0FBSyxpQ0FBaUM7UUFDN0QsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxFQUFFO1FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxtQ0FBbUMsQ0FBQyxJQUFVOztRQUN0RCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLE9BQU8sT0FBTyxJQUFJLE9BQU8sS0FBSyxtQ0FBbUM7UUFDL0QsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDOzs7Ozs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQVksRUFBRSxJQUFVOztRQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFTLElBQUksT0FBRyxDQUFDO0lBQzdDLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsT0FBTztRQUNMLG9CQUFvQixDQUFDLGlDQUFpQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0Qsb0JBQW9CLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4vb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSA9ICdvY2MtYmFja2VuZC1iYXNlLXVybCc7XG5leHBvcnQgY29uc3QgT0NDX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSID0gJ09DQ19CQUNLRU5EX0JBU0VfVVJMX1ZBTFVFJztcbmV4cG9ydCBjb25zdCBNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19OQU1FID0gJ21lZGlhLWJhY2tlbmQtYmFzZS11cmwnO1xuZXhwb3J0IGNvbnN0IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSID1cbiAgJ01FRElBX0JBQ0tFTkRfQkFTRV9VUkxfVkFMVUUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb2NjU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5KG1ldGE6IE1ldGEpOiBPY2NDb25maWcge1xuICBjb25zdCBiYXNlVXJsID0gZ2V0TWV0YVRhZ0NvbnRlbnQoT0NDX0JBU0VfVVJMX01FVEFfVEFHX05BTUUsIG1ldGEpO1xuICByZXR1cm4gYmFzZVVybCAmJiBiYXNlVXJsICE9PSBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVJcbiAgICA/IHsgYmFja2VuZDogeyBvY2M6IHsgYmFzZVVybCB9IH0gfVxuICAgIDoge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVNlcnZlckNvbmZpZ0Zyb21NZXRhVGFnRmFjdG9yeShtZXRhOiBNZXRhKTogT2NjQ29uZmlnIHtcbiAgY29uc3QgYmFzZVVybCA9IGdldE1ldGFUYWdDb250ZW50KE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX05BTUUsIG1ldGEpO1xuICByZXR1cm4gYmFzZVVybCAmJiBiYXNlVXJsICE9PSBNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUlxuICAgID8geyBiYWNrZW5kOiB7IG1lZGlhOiB7IGJhc2VVcmwgfSB9IH1cbiAgICA6IHt9O1xufVxuXG5mdW5jdGlvbiBnZXRNZXRhVGFnQ29udGVudChuYW1lOiBzdHJpbmcsIG1ldGE6IE1ldGEpIHtcbiAgY29uc3QgbWV0YVRhZyA9IG1ldGEuZ2V0VGFnKGBuYW1lPVwiJHtuYW1lfVwiYCk7XG4gIHJldHVybiBtZXRhVGFnICYmIG1ldGFUYWcuY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKTogUHJvdmlkZXJbXSB7XG4gIHJldHVybiBbXG4gICAgcHJvdmlkZUNvbmZpZ0ZhY3Rvcnkob2NjU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5LCBbTWV0YV0pLFxuICAgIHByb3ZpZGVDb25maWdGYWN0b3J5KG1lZGlhU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5LCBbTWV0YV0pLFxuICBdO1xufVxuIl19
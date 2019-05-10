/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Component() { }
if (false) {
    /** @type {?|undefined} */
    Component.prototype.modifiedtime;
    /** @type {?|undefined} */
    Component.prototype.name;
    /** @type {?|undefined} */
    Component.prototype.otherProperties;
    /** @type {?|undefined} */
    Component.prototype.typeCode;
    /** @type {?|undefined} */
    Component.prototype.uid;
}
/**
 * @record
 */
export function ContentSlot() { }
if (false) {
    /** @type {?|undefined} */
    ContentSlot.prototype.components;
    /** @type {?|undefined} */
    ContentSlot.prototype.name;
    /** @type {?|undefined} */
    ContentSlot.prototype.position;
    /** @type {?|undefined} */
    ContentSlot.prototype.slotId;
    /** @type {?|undefined} */
    ContentSlot.prototype.slotShared;
    /** @type {?|undefined} */
    ContentSlot.prototype.slotStatus;
}
/**
 * @record
 */
export function CMSPage() { }
if (false) {
    /** @type {?|undefined} */
    CMSPage.prototype.contentSlots;
    /** @type {?|undefined} */
    CMSPage.prototype.defaultPage;
    /** @type {?|undefined} */
    CMSPage.prototype.name;
    /** @type {?|undefined} */
    CMSPage.prototype.template;
    /** @type {?|undefined} */
    CMSPage.prototype.title;
    /** @type {?|undefined} */
    CMSPage.prototype.typeCode;
    /** @type {?|undefined} */
    CMSPage.prototype.uid;
}
/** @enum {string} */
const PageType = {
    CONTENT_PAGE: 'ContentPage',
    PRODUCT_PAGE: 'ProductPage',
    CATEGORY_PAGE: 'CategoryPage',
    CATALOG_PAGE: 'CatalogPage',
};
export { PageType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Ntcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsK0JBTUM7OztJQUxDLGlDQUFvQjs7SUFDcEIseUJBQWM7O0lBQ2Qsb0NBQXNCOztJQUN0Qiw2QkFBa0I7O0lBQ2xCLHdCQUFhOzs7OztBQUdmLGlDQVFDOzs7SUFOQyxpQ0FBd0M7O0lBQ3hDLDJCQUFjOztJQUNkLCtCQUFrQjs7SUFDbEIsNkJBQWdCOztJQUNoQixpQ0FBcUI7O0lBQ3JCLGlDQUFvQjs7Ozs7QUFHdEIsNkJBU0M7OztJQVBDLCtCQUE4Qzs7SUFDOUMsOEJBQXNCOztJQUN0Qix1QkFBYzs7SUFDZCwyQkFBa0I7O0lBQ2xCLHdCQUFlOztJQUNmLDJCQUFrQjs7SUFDbEIsc0JBQWE7Ozs7SUFJYixjQUFlLGFBQWE7SUFDNUIsY0FBZSxhQUFhO0lBQzVCLGVBQWdCLGNBQWM7SUFDOUIsY0FBZSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnQge1xuICBtb2RpZmllZHRpbWU/OiBEYXRlO1xuICBuYW1lPzogc3RyaW5nO1xuICBvdGhlclByb3BlcnRpZXM/OiBhbnk7XG4gIHR5cGVDb2RlPzogc3RyaW5nO1xuICB1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFNsb3Qge1xuICAvLyBUT0RPOiBPcHRpbWl6ZSB3aXRoIGNvbnZlcnRlcnNcbiAgY29tcG9uZW50cz86IHsgY29tcG9uZW50OiBDb21wb25lbnRbXSB9O1xuICBuYW1lPzogc3RyaW5nO1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgc2xvdElkPzogc3RyaW5nO1xuICBzbG90U2hhcmVkPzogYm9vbGVhbjtcbiAgc2xvdFN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDTVNQYWdlIHtcbiAgLy8gVE9ETzogT3B0aW1pemUgd2l0aCBjb252ZXJ0ZXJzXG4gIGNvbnRlbnRTbG90cz86IHsgY29udGVudFNsb3Q6IENvbnRlbnRTbG90W10gfTtcbiAgZGVmYXVsdFBhZ2U/OiBib29sZWFuO1xuICBuYW1lPzogc3RyaW5nO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHR5cGVDb2RlPzogc3RyaW5nO1xuICB1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgQ09OVEVOVF9QQUdFID0gJ0NvbnRlbnRQYWdlJyxcbiAgUFJPRFVDVF9QQUdFID0gJ1Byb2R1Y3RQYWdlJyxcbiAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICBDQVRBTE9HX1BBR0UgPSAnQ2F0YWxvZ1BhZ2UnLFxufVxuIl19
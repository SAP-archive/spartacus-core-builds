export var PageType;
(function (PageType) {
    PageType["CONTENT_PAGE"] = "ContentPage";
    PageType["PRODUCT_PAGE"] = "ProductPage";
    PageType["CATEGORY_PAGE"] = "CategoryPage";
    PageType["CATALOG_PAGE"] = "CatalogPage";
})(PageType || (PageType = {}));
export var CmsBannerCarouselEffect;
(function (CmsBannerCarouselEffect) {
    CmsBannerCarouselEffect["FADE"] = "FADE";
    CmsBannerCarouselEffect["ZOOM"] = "ZOOM";
    CmsBannerCarouselEffect["CURTAIN"] = "CURTAINX";
    CmsBannerCarouselEffect["TURNDOWN"] = "TURNDOWN";
})(CmsBannerCarouselEffect || (CmsBannerCarouselEffect = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvbW9kZWwvY21zLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE1BQU0sQ0FBTixJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDbEIsd0NBQTRCLENBQUE7SUFDNUIsd0NBQTRCLENBQUE7SUFDNUIsMENBQThCLENBQUE7SUFDOUIsd0NBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBOEVELE1BQU0sQ0FBTixJQUFZLHVCQUtYO0FBTEQsV0FBWSx1QkFBdUI7SUFDakMsd0NBQWEsQ0FBQTtJQUNiLHdDQUFhLENBQUE7SUFDYiwrQ0FBb0IsQ0FBQTtJQUNwQixnREFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBTFcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUtsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50IHtcbiAgbW9kaWZpZWRUaW1lPzogRGF0ZTtcbiAgbmFtZT86IHN0cmluZztcbiAgb3RoZXJQcm9wZXJ0aWVzPzogYW55O1xuICB0eXBlQ29kZT86IHN0cmluZztcbiAgdWlkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQYWdlVHlwZSB7XG4gIENPTlRFTlRfUEFHRSA9ICdDb250ZW50UGFnZScsXG4gIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gIENBVEVHT1JZX1BBR0UgPSAnQ2F0ZWdvcnlQYWdlJyxcbiAgQ0FUQUxPR19QQUdFID0gJ0NhdGFsb2dQYWdlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNMaW5rQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgdXJsPzogc3RyaW5nO1xuICBjb250YWluZXI/OiBib29sZWFuO1xuICBleHRlcm5hbD86IGJvb2xlYW47XG4gIGNvbnRlbnRQYWdlPzogc3RyaW5nO1xuICBjb250ZW50UGFnZUxhYmVsT3JJZD86IHN0cmluZztcbiAgbGlua05hbWU/OiBzdHJpbmc7XG4gIHRhcmdldD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN0eWxlIGNsYXNzZXMgY2FuIGJlIGFkZGVkIHRvIHRoZSBDTVMgTGluayBjb21wb25lbnQgdG8gZW5oYW5jZSB0aGUgVVguXG4gICAqIFRoZSBzdHlsZSBjbGFzc2VzIGFyZSB0eXBpY2FsbHkgZGVyaXZlZCBmcm9tIHRoZSAoQ01TKSBiYWNrZW5kIGFuZCBzaG91bGRcbiAgICogbWF0Y2ggYW4gZXhpc3RpbmcgQ1NTIHNlbGVjdG9yLlxuICAgKlxuICAgKiBUaGUgc3R5bGVDbGFzc2VzIGNhbiBjb250YWluIGEgXCJsaXN0XCIgb2Ygc3BhY2Ugc2VwYXJhdGVkIHN0eWxlIGNsYXNzZXMuXG4gICAqL1xuICBzdHlsZUNsYXNzZXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlIHJ1bGVzIGNhbiBiZSBhZGRlZCB0byB0aGUgQ01TIExpbmsgY29tcG9uZW50IHRvIGVuaGFuY2UgdGhlIFVYLlxuICAgKiBUaGUgc3R5bGUgYXR0cmlidXRlcyBhcmUgdHlwaWNhbGx5IGRlcml2ZWQgZnJvbSB0aGUgKENNUykgYmFja2VuZC5cbiAgICpcbiAgICogVGhlIHN0eWxlQXR0cmlidXRlcyBjYW4gY29udGFpbiBhIFwibGlzdFwiIG9mIHNlbWljb2xvbiBzZXBhcmF0ZWQgc3R5bGUgcnVsZXMuXG4gICAqL1xuICBzdHlsZUF0dHJpYnV0ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zU2VhcmNoQm94Q29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogYm9vbGVhbjtcbiAgbWF4U3VnZ2VzdGlvbnM/OiBudW1iZXI7XG4gIG1heFByb2R1Y3RzPzogbnVtYmVyO1xuICBkaXNwbGF5U3VnZ2VzdGlvbnM/OiBib29sZWFuO1xuICBkaXNwbGF5UHJvZHVjdHM/OiBib29sZWFuO1xuICBkaXNwbGF5UHJvZHVjdEltYWdlcz86IGJvb2xlYW47XG4gIHdhaXRUaW1lQmVmb3JlUmVxdWVzdD86IG51bWJlcjtcbiAgbWluQ2hhcmFjdGVyc0JlZm9yZVJlcXVlc3Q/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUGFyYWdyYXBoQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGVudD86IHN0cmluZztcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIGNvbXBvbmVudHM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQmFubmVyQ29tcG9uZW50TWVkaWEge1xuICBhbHRUZXh0Pzogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICBtaW1lPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhIHtcbiAgZGVza3RvcD86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhO1xuICBtb2JpbGU/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbiAgdGFibGV0PzogQ21zQmFubmVyQ29tcG9uZW50TWVkaWE7XG4gIHdpZGVzY3JlZW4/OiBDbXNCYW5uZXJDb21wb25lbnRNZWRpYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNCYW5uZXJDb21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBoZWFkbGluZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBtZWRpYT86IENtc0Jhbm5lckNvbXBvbmVudE1lZGlhIHwgQ21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhO1xuICB1cmxMaW5rPzogc3RyaW5nO1xuICBleHRlcm5hbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQ21zQmFubmVyQ2Fyb3VzZWxFZmZlY3Qge1xuICBGQURFID0gJ0ZBREUnLFxuICBaT09NID0gJ1pPT00nLFxuICBDVVJUQUlOID0gJ0NVUlRBSU5YJyxcbiAgVFVSTkRPV04gPSAnVFVSTkRPV04nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc0Jhbm5lckNhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgYmFubmVycz86IHN0cmluZztcbiAgZWZmZWN0PzogQ21zQmFubmVyQ2Fyb3VzZWxFZmZlY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ21zUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHByb2R1Y3RDb2Rlcz86IHN0cmluZztcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBwb3B1cD86IHN0cmluZztcbiAgc2Nyb2xsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRpc3BsYXlQcm9kdWN0VGl0bGVzPzogc3RyaW5nO1xuICBkaXNwbGF5UHJvZHVjdFByaWNlcz86IHN0cmluZztcbiAgbWF4aW11bU51bWJlclByb2R1Y3RzPzogbnVtYmVyO1xuICBwcm9kdWN0UmVmZXJlbmNlVHlwZXM/OiBzdHJpbmc7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNNaW5pQ2FydENvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbiAgc2hvd25Qcm9kdWN0Q291bnQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB0b3RhbERpc3BsYXk/OiBzdHJpbmc7XG4gIGxpZ2h0Ym94QmFubmVyQ29tcG9uZW50PzogQ21zQmFubmVyQ29tcG9uZW50O1xufVxuXG4vLyBUT0RPOiBVcGdyYWRlIG1vZGVsIHdoZW4gQnJlYWRjcnVtYnMgd2lsbCBiZSBmaW5hbGx5IHVzZWQgaW4gcHJvamVjdFxuZXhwb3J0IGludGVyZmFjZSBDbXNCcmVhZGNydW1ic0NvbXBvbmVudCBleHRlbmRzIENtc0NvbXBvbmVudCB7XG4gIGNvbnRhaW5lcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNOYXZpZ2F0aW9uTm9kZSB7XG4gIHVpZD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogQXJyYXk8Q21zTmF2aWdhdGlvbk5vZGU+O1xuICBlbnRyaWVzPzogQXJyYXk8Q21zTmF2aWdhdGlvbkVudHJ5Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNOYXZpZ2F0aW9uRW50cnkge1xuICBpdGVtSWQ/OiBzdHJpbmc7XG4gIGl0ZW1TdXBlclR5cGU/OiBzdHJpbmc7XG4gIGl0ZW1UeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENtc05hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDbXNDb21wb25lbnQge1xuICBjb250YWluZXI/OiBzdHJpbmc7XG4gIHN0eWxlQ2xhc3M/OiBzdHJpbmc7XG4gIHdyYXBBZnRlcj86IHN0cmluZztcbiAgbm90aWNlPzogc3RyaW5nO1xuICBzaG93TGFuZ3VhZ2VDdXJyZW5jeT86IHN0cmluZztcbiAgbmF2aWdhdGlvbk5vZGU/OiBDbXNOYXZpZ2F0aW9uTm9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNQcm9kdWN0RmFjZXROYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ21zQ29tcG9uZW50IHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICBhY3RpdmVGYWNldFZhbHVlQ29kZT86IHN0cmluZztcbiAgc2VhcmNoUmVzdWx0Pzogc3RyaW5nO1xuICBtaW5QZXJGYWNldD86IHN0cmluZztcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from './page-meta.resolver';
import { ContentPageMetaResolver } from './content-page-meta.resolver';
var CmsPageTitleModule = /** @class */ (function () {
    function CmsPageTitleModule() {
    }
    CmsPageTitleModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        {
                            provide: PageMetaResolver,
                            useExisting: ContentPageMetaResolver,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return CmsPageTitleModule;
}());
export { CmsPageTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkU7SUFBQTtJQVNpQyxDQUFDOztnQkFUakMsUUFBUSxTQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLEVBQUUsdUJBQXVCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQVRsQyxJQVNrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENvbnRlbnRQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9jb250ZW50LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICB1c2VFeGlzdGluZzogQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYWdlVGl0bGVNb2R1bGUge31cbiJdfQ==
import { Pipe } from '@angular/core';
import { SemanticPathService } from './semantic-path.service';
export class ProductURLPipe {
    constructor(semanticPath) {
        this.semanticPath = semanticPath;
    }
    transform(product) {
        return this.semanticPath.transform({ cxRoute: 'product', params: product });
    }
}
ProductURLPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxProductUrl',
            },] }
];
ProductURLPipe.ctorParameters = () => [
    { type: SemanticPathService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC11cmwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vcHJvZHVjdC11cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUs5RCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFBRyxDQUFDO0lBQ3pELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFQRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGNBQWM7YUFDckI7OztZQUpRLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5AUGlwZSh7XG4gIG5hbWU6ICdjeFByb2R1Y3RVcmwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VVJMUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbWFudGljUGF0aDogU2VtYW50aWNQYXRoU2VydmljZSkge31cbiAgdHJhbnNmb3JtKHByb2R1Y3Q6IFByb2R1Y3QpIHtcbiAgICByZXR1cm4gdGhpcy5zZW1hbnRpY1BhdGgudHJhbnNmb3JtKHsgY3hSb3V0ZTogJ3Byb2R1Y3QnLCBwYXJhbXM6IHByb2R1Y3QgfSk7XG4gIH1cbn1cbiJdfQ==
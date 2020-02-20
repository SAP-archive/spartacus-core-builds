import { __decorate, __extends } from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
var MockDatePipe = /** @class */ (function (_super) {
    __extends(MockDatePipe, _super);
    function MockDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockDatePipe.prototype.transform = function (value, format, timezone) {
        return _super.prototype.transform.call(this, value, format, timezone, 'en');
    };
    MockDatePipe = __decorate([
        Pipe({ name: 'cxDate' })
    ], MockDatePipe);
    return MockDatePipe;
}(DatePipe));
export { MockDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1kYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90ZXN0aW5nL21vY2stZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFBa0MsZ0NBQVE7SUFBMUM7O0lBSUEsQ0FBQztJQUhDLGdDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBZSxFQUFFLFFBQWlCO1FBQ3RELE9BQU8saUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFIVSxZQUFZO1FBRHhCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztPQUNaLFlBQVksQ0FJeEI7SUFBRCxtQkFBQztDQUFBLEFBSkQsQ0FBa0MsUUFBUSxHQUl6QztTQUpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHsgbmFtZTogJ2N4RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGF0ZVBpcGUgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgJ2VuJyk7XG4gIH1cbn1cbiJdfQ==
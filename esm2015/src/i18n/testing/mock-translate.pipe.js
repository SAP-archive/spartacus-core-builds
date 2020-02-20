import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { mockTranslate } from './mock-translate';
let MockTranslatePipe = class MockTranslatePipe {
    transform(input, options = {}) {
        if (input.raw) {
            return input.raw;
        }
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign(Object.assign({}, options), input.params);
        }
        return mockTranslate(key, options);
    }
};
MockTranslatePipe = __decorate([
    Pipe({ name: 'cxTranslate' })
], MockTranslatePipe);
export { MockTranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxLQUE0QixFQUFFLFVBQWtCLEVBQUU7UUFDMUQsSUFBSyxLQUFzQixDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFRLEtBQXNCLENBQUMsR0FBRyxDQUFDO1NBQ3BDO1FBRUQsTUFBTSxHQUFHLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxtQ0FBUSxPQUFPLEdBQUssS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxhQUFhLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRixDQUFBO0FBWlksaUJBQWlCO0lBRDdCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQztHQUNqQixpQkFBaUIsQ0FZN0I7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtb2NrVHJhbnNsYXRlIH0gZnJvbSAnLi9tb2NrLXRyYW5zbGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi90cmFuc2xhdGFibGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBNb2NrVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZywgb3B0aW9uczogb2JqZWN0ID0ge30pOiBzdHJpbmcge1xuICAgIGlmICgoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXcpIHtcbiAgICAgIHJldHVybiAoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXc7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IGlucHV0IDogaW5wdXQua2V5O1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCAuLi5pbnB1dC5wYXJhbXMgfTtcbiAgICB9XG4gICAgcmV0dXJuIG1vY2tUcmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
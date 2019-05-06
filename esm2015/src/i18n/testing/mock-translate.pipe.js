/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { mockTranslate } from './mock-translate';
export class MockTranslatePipe {
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    transform(input, options = {}) {
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        let key;
        if (typeof input === 'string') {
            key = input;
        }
        else {
            key = input.key;
            options = Object.assign({}, options, input.params);
        }
        return mockTranslate(key, options);
    }
}
MockTranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixTQUFTLENBQUMsS0FBNEIsRUFBRSxVQUFrQixFQUFFO1FBQzFELElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7WUFFRyxHQUFXO1FBQ2YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNoQixPQUFPLHFCQUFRLE9BQU8sRUFBSyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDM0M7UUFFRCxPQUFPLGFBQWEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtb2NrVHJhbnNsYXRlIH0gZnJvbSAnLi9tb2NrLXRyYW5zbGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi90cmFuc2xhdGFibGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBNb2NrVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZywgb3B0aW9uczogb2JqZWN0ID0ge30pOiBzdHJpbmcge1xuICAgIGlmICgoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXcpIHtcbiAgICAgIHJldHVybiAoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXc7XG4gICAgfVxuXG4gICAgbGV0IGtleTogc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBrZXkgPSBpbnB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gaW5wdXQua2V5O1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vY2tUcmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
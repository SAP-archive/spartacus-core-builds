/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_LANGUAGES = '[Site-context] Load Languages';
/** @type {?} */
export const LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
/** @type {?} */
export const LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
/** @type {?} */
export const SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
/** @type {?} */
export const LANGUAGE_CHANGE = '[Site-context] Language Change';
export class LoadLanguages {
    constructor() {
        this.type = LOAD_LANGUAGES;
    }
}
if (false) {
    /** @type {?} */
    LoadLanguages.prototype.type;
}
export class LoadLanguagesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadLanguagesFail.prototype.type;
    /** @type {?} */
    LoadLanguagesFail.prototype.payload;
}
export class LoadLanguagesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadLanguagesSuccess.prototype.type;
    /** @type {?} */
    LoadLanguagesSuccess.prototype.payload;
}
export class SetActiveLanguage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
}
if (false) {
    /** @type {?} */
    SetActiveLanguage.prototype.type;
    /** @type {?} */
    SetActiveLanguage.prototype.payload;
}
export class LanguageChange {
    constructor() {
        this.type = LANGUAGE_CHANGE;
    }
}
if (false) {
    /** @type {?} */
    LanguageChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGNBQWMsR0FBRywrQkFBK0I7O0FBQzdELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxvQ0FBb0M7O0FBQ3ZFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyx1Q0FBdUM7O0FBQzdFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxvQ0FBb0M7O0FBQ3ZFLE1BQU0sT0FBTyxlQUFlLEdBQUcsZ0NBQWdDO0FBRS9ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ1csU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNqQyxDQUFDO0NBQUE7OztJQURDLDZCQUErQjs7QUFHakMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRixDQUFDO0NBQ3BDOzs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFHakMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUUvQixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUNFLENBQUM7Q0FDM0M7OztJQUZDLG9DQUF1Qzs7SUFDM0IsdUNBQTBCOztBQUd4QyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNDLENBQUM7Q0FDdkM7OztJQUZDLGlDQUFvQzs7SUFDeEIsb0NBQXNCOztBQUdwQyxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNXLFNBQUksR0FBRyxlQUFlLENBQUM7SUFDbEMsQ0FBQztDQUFBOzs7SUFEQyw4QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9MQU5HVUFHRVMgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBMYW5ndWFnZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfTEFOR1VBR0VTX0ZBSUwgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBMYW5ndWFnZXMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9MQU5HVUFHRVNfU1VDQ0VTUyA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIExhbmd1YWdlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX0xBTkdVQUdFID0gJ1tTaXRlLWNvbnRleHRdIFNldCBBY3RpdmUgTGFuZ3VhZ2UnO1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0NIQU5HRSA9ICdbU2l0ZS1jb250ZXh0XSBMYW5ndWFnZSBDaGFuZ2UnO1xuXG5leHBvcnQgY2xhc3MgTG9hZExhbmd1YWdlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0xBTkdVQUdFUztcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRMYW5ndWFnZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTEFOR1VBR0VTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTGFuZ3VhZ2VzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0xBTkdVQUdFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogTGFuZ3VhZ2VbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZUxhbmd1YWdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9BQ1RJVkVfTEFOR1VBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZUNoYW5nZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMQU5HVUFHRV9DSEFOR0U7XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VzQWN0aW9uID1cbiAgfCBMb2FkTGFuZ3VhZ2VzXG4gIHwgTG9hZExhbmd1YWdlc0ZhaWxcbiAgfCBMb2FkTGFuZ3VhZ2VzU3VjY2Vzc1xuICB8IFNldEFjdGl2ZUxhbmd1YWdlXG4gIHwgTGFuZ3VhZ2VDaGFuZ2U7XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_LANGUAGES = '[Site-context] Load Languages';
/** @type {?} */
export var LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
/** @type {?} */
export var LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
/** @type {?} */
export var SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
/** @type {?} */
export var LANGUAGE_CHANGE = '[Site-context] Language Change';
var LoadLanguages = /** @class */ (function () {
    function LoadLanguages() {
        this.type = LOAD_LANGUAGES;
    }
    return LoadLanguages;
}());
export { LoadLanguages };
if (false) {
    /** @type {?} */
    LoadLanguages.prototype.type;
}
var LoadLanguagesFail = /** @class */ (function () {
    function LoadLanguagesFail(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
    return LoadLanguagesFail;
}());
export { LoadLanguagesFail };
if (false) {
    /** @type {?} */
    LoadLanguagesFail.prototype.type;
    /** @type {?} */
    LoadLanguagesFail.prototype.payload;
}
var LoadLanguagesSuccess = /** @class */ (function () {
    function LoadLanguagesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
    return LoadLanguagesSuccess;
}());
export { LoadLanguagesSuccess };
if (false) {
    /** @type {?} */
    LoadLanguagesSuccess.prototype.type;
    /** @type {?} */
    LoadLanguagesSuccess.prototype.payload;
}
var SetActiveLanguage = /** @class */ (function () {
    function SetActiveLanguage(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
    return SetActiveLanguage;
}());
export { SetActiveLanguage };
if (false) {
    /** @type {?} */
    SetActiveLanguage.prototype.type;
    /** @type {?} */
    SetActiveLanguage.prototype.payload;
}
var LanguageChange = /** @class */ (function () {
    function LanguageChange() {
        this.type = LANGUAGE_CHANGE;
    }
    return LanguageChange;
}());
export { LanguageChange };
if (false) {
    /** @type {?} */
    LanguageChange.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLGNBQWMsR0FBRywrQkFBK0I7O0FBQzdELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxvQ0FBb0M7O0FBQ3ZFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyx1Q0FBdUM7O0FBQzdFLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxvQ0FBb0M7O0FBQ3ZFLE1BQU0sS0FBTyxlQUFlLEdBQUcsZ0NBQWdDO0FBRS9EO0lBQUE7UUFDVyxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ2pDLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsNkJBQStCOztBQUdqQztJQUVFLDJCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRixDQUFDO0lBQ3JDLHdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBb0M7O0lBQ3hCLG9DQUFtQjs7QUFHakM7SUFFRSw4QkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDRSxDQUFDO0lBQzVDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxvQ0FBdUM7O0lBQzNCLHVDQUEwQjs7QUFHeEM7SUFFRSwyQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0MsQ0FBQztJQUN4Qyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW9DOztJQUN4QixvQ0FBc0I7O0FBR3BDO0lBQUE7UUFDVyxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ2xDLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsOEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfTEFOR1VBR0VTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgTGFuZ3VhZ2VzJztcbmV4cG9ydCBjb25zdCBMT0FEX0xBTkdVQUdFU19GQUlMID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgTGFuZ3VhZ2VzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfTEFOR1VBR0VTX1NVQ0NFU1MgPSAnW1NpdGUtY29udGV4dF0gTG9hZCBMYW5ndWFnZXMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9MQU5HVUFHRSA9ICdbU2l0ZS1jb250ZXh0XSBTZXQgQWN0aXZlIExhbmd1YWdlJztcbmV4cG9ydCBjb25zdCBMQU5HVUFHRV9DSEFOR0UgPSAnW1NpdGUtY29udGV4dF0gTGFuZ3VhZ2UgQ2hhbmdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRMYW5ndWFnZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9MQU5HVUFHRVM7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTGFuZ3VhZ2VzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0xBTkdVQUdFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZExhbmd1YWdlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9MQU5HVUFHRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExhbmd1YWdlW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVMYW5ndWFnZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQUNUSVZFX0xBTkdVQUdFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VDaGFuZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTEFOR1VBR0VfQ0hBTkdFO1xufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIExhbmd1YWdlc0FjdGlvbiA9XG4gIHwgTG9hZExhbmd1YWdlc1xuICB8IExvYWRMYW5ndWFnZXNGYWlsXG4gIHwgTG9hZExhbmd1YWdlc1N1Y2Nlc3NcbiAgfCBTZXRBY3RpdmVMYW5ndWFnZVxuICB8IExhbmd1YWdlQ2hhbmdlO1xuIl19
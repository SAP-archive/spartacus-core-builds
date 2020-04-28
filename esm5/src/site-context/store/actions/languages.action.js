export var LOAD_LANGUAGES = '[Site-context] Load Languages';
export var LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
export var LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
export var SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
export var LANGUAGE_CHANGE = '[Site-context] Language Change';
var LoadLanguages = /** @class */ (function () {
    function LoadLanguages() {
        this.type = LOAD_LANGUAGES;
    }
    return LoadLanguages;
}());
export { LoadLanguages };
var LoadLanguagesFail = /** @class */ (function () {
    function LoadLanguagesFail(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
    return LoadLanguagesFail;
}());
export { LoadLanguagesFail };
var LoadLanguagesSuccess = /** @class */ (function () {
    function LoadLanguagesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
    return LoadLanguagesSuccess;
}());
export { LoadLanguagesSuccess };
var SetActiveLanguage = /** @class */ (function () {
    function SetActiveLanguage(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
    return SetActiveLanguage;
}());
export { SetActiveLanguage };
var LanguageChange = /** @class */ (function () {
    function LanguageChange(payload) {
        this.payload = payload;
        this.type = LANGUAGE_CHANGE;
    }
    return LanguageChange;
}());
export { LanguageChange };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRywrQkFBK0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUM5RSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsZ0NBQWdDLENBQUM7QUFFaEU7SUFBQTtRQUNXLFNBQUksR0FBRyxjQUFjLENBQUM7SUFDakMsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7SUFFRSwyQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0YsQ0FBQztJQUNyQyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBRUUsOEJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ0UsQ0FBQztJQUM1QywyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBRUUsMkJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUNDLENBQUM7SUFDeEMsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLHdCQUFtQixPQUE4QztRQUE5QyxZQUFPLEdBQVAsT0FBTyxDQUF1QztRQUR4RCxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ29DLENBQUM7SUFDdkUscUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0xBTkdVQUdFUyA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIExhbmd1YWdlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9MQU5HVUFHRVNfRkFJTCA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIExhbmd1YWdlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0xBTkdVQUdFU19TVUNDRVNTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgTGFuZ3VhZ2VzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfTEFOR1VBR0UgPSAnW1NpdGUtY29udGV4dF0gU2V0IEFjdGl2ZSBMYW5ndWFnZSc7XG5leHBvcnQgY29uc3QgTEFOR1VBR0VfQ0hBTkdFID0gJ1tTaXRlLWNvbnRleHRdIExhbmd1YWdlIENoYW5nZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkTGFuZ3VhZ2VzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTEFOR1VBR0VTO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZExhbmd1YWdlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9MQU5HVUFHRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRMYW5ndWFnZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTEFOR1VBR0VTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMYW5ndWFnZVtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlTGFuZ3VhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9MQU5HVUFHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQ2hhbmdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExBTkdVQUdFX0NIQU5HRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgcHJldmlvdXM6IHN0cmluZzsgY3VycmVudDogc3RyaW5nIH0pIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VzQWN0aW9uID1cbiAgfCBMb2FkTGFuZ3VhZ2VzXG4gIHwgTG9hZExhbmd1YWdlc0ZhaWxcbiAgfCBMb2FkTGFuZ3VhZ2VzU3VjY2Vzc1xuICB8IFNldEFjdGl2ZUxhbmd1YWdlXG4gIHwgTGFuZ3VhZ2VDaGFuZ2U7XG4iXX0=
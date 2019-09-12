/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} cookie
 * @param {?} name
 * @return {?}
 */
export function getCookie(cookie, name) {
    /** @type {?} */
    const regExp = new RegExp('(?:^|;\\s*)' + name + '=([^;]*)', 'g');
    /** @type {?} */
    const result = regExp.exec(cookie);
    return (result && decodeURIComponent(result[1])) || '';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvb2tpZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvdXRpbHMvZ2V0LWNvb2tpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFZOztVQUM5QyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxVQUFVLEVBQUUsR0FBRyxDQUFDOztVQUMzRCxNQUFNLEdBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY29va2llOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKCcoPzpefDtcXFxccyopJyArIG5hbWUgKyAnPShbXjtdKiknLCAnZycpO1xuICBjb25zdCByZXN1bHQ6IFJlZ0V4cEV4ZWNBcnJheSA9IHJlZ0V4cC5leGVjKGNvb2tpZSk7XG5cbiAgcmV0dXJuIChyZXN1bHQgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdFsxXSkpIHx8ICcnO1xufVxuIl19
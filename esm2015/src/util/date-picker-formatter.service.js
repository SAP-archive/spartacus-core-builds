import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DatePickerFormatterService {
    constructor() { }
    toNative(value) {
        return value ? new Date(value).toISOString().split('T')[0] : null;
    }
    toModel(value, endOfDay) {
        if (value) {
            let date = new Date(value)
                .toISOString()
                .replace('.', '+')
                .replace('Z', '0');
            if (endOfDay) {
                date = date.replace('00:00:00', '23:59:59');
            }
            return date;
        }
    }
}
DatePickerFormatterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatePickerFormatterService_Factory() { return new DatePickerFormatterService(); }, token: DatePickerFormatterService, providedIn: "root" });
DatePickerFormatterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DatePickerFormatterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2RhdGUtcGlja2VyLWZvcm1hdHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsZ0JBQWUsQ0FBQztJQUVoQixRQUFRLENBQUMsS0FBYTtRQUNwQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDdEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCLFdBQVcsRUFBRTtpQkFDYixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDakIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVyQixJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyRm9ybWF0dGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0b05hdGl2ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIDogbnVsbDtcbiAgfVxuXG4gIHRvTW9kZWwodmFsdWU6IHN0cmluZywgZW5kT2ZEYXk6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoJy4nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKCdaJywgJzAnKTtcblxuICAgICAgaWYgKGVuZE9mRGF5KSB7XG4gICAgICAgIGRhdGUgPSBkYXRlLnJlcGxhY2UoJzAwOjAwOjAwJywgJzIzOjU5OjU5Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
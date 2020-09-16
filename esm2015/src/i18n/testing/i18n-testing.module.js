import { NgModule } from '@angular/core';
import { MockTranslatePipe } from './mock-translate.pipe';
import { TranslationService } from '../translation.service';
import { MockTranslationService } from './mock-translation.service';
import { MockDatePipe } from './mock-date.pipe';
export class I18nTestingModule {
}
I18nTestingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MockTranslatePipe, MockDatePipe],
                exports: [MockTranslatePipe, MockDatePipe],
                providers: [
                    { provide: TranslationService, useClass: MockTranslationService },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi10ZXN0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2kxOG4vdGVzdGluZy9pMThuLXRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBU2hELE1BQU0sT0FBTyxpQkFBaUI7OztZQVA3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUM7Z0JBQzFDLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7aUJBQ2xFO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9ja1RyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL21vY2stdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNb2NrVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9ja0RhdGVQaXBlIH0gZnJvbSAnLi9tb2NrLWRhdGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vY2tUcmFuc2xhdGVQaXBlLCBNb2NrRGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbTW9ja1RyYW5zbGF0ZVBpcGUsIE1vY2tEYXRlUGlwZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogVHJhbnNsYXRpb25TZXJ2aWNlLCB1c2VDbGFzczogTW9ja1RyYW5zbGF0aW9uU2VydmljZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJMThuVGVzdGluZ01vZHVsZSB7fVxuIl19
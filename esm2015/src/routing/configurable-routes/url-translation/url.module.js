import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlPipe } from './url.pipe';
import { ProductURLPipe } from './product-url.pipe';
export class UrlModule {
}
UrlModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [UrlPipe, ProductURLPipe],
                exports: [UrlPipe, ProductURLPipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sU0FBUzs7O1lBTHJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFBpcGUgfSBmcm9tICcuL3VybC5waXBlJztcbmltcG9ydCB7IFByb2R1Y3RVUkxQaXBlIH0gZnJvbSAnLi9wcm9kdWN0LXVybC5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1VybFBpcGUsIFByb2R1Y3RVUkxQaXBlXSxcbiAgZXhwb3J0czogW1VybFBpcGUsIFByb2R1Y3RVUkxQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVXJsTW9kdWxlIHt9XG4iXX0=
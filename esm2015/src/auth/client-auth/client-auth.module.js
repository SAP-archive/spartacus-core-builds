import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { interceptors } from './http-interceptors/index';
import { ClientAuthStoreModule } from './store/client-auth-store.module';
/**
 * Some of the OCC endpoints require Authorization header with the client token (eg. user registration).
 * This pattern should not be used in the frontend apps, but until OCC changes this requirement
 * we provide this module to support using those endpoints.
 *
 * After OCC improvements regarding client authentication this module can be safely removed.
 */
export class ClientAuthModule {
    static forRoot() {
        return {
            ngModule: ClientAuthModule,
            providers: [...interceptors],
        };
    }
}
ClientAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ClientAuthStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWF1dGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC9jbGllbnQtYXV0aC9jbGllbnQtYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RTs7Ozs7O0dBTUc7QUFJSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7OztZQVRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2xpZW50QXV0aFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jbGllbnQtYXV0aC1zdG9yZS5tb2R1bGUnO1xuXG4vKipcbiAqIFNvbWUgb2YgdGhlIE9DQyBlbmRwb2ludHMgcmVxdWlyZSBBdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIHRoZSBjbGllbnQgdG9rZW4gKGVnLiB1c2VyIHJlZ2lzdHJhdGlvbikuXG4gKiBUaGlzIHBhdHRlcm4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIHRoZSBmcm9udGVuZCBhcHBzLCBidXQgdW50aWwgT0NDIGNoYW5nZXMgdGhpcyByZXF1aXJlbWVudFxuICogd2UgcHJvdmlkZSB0aGlzIG1vZHVsZSB0byBzdXBwb3J0IHVzaW5nIHRob3NlIGVuZHBvaW50cy5cbiAqXG4gKiBBZnRlciBPQ0MgaW1wcm92ZW1lbnRzIHJlZ2FyZGluZyBjbGllbnQgYXV0aGVudGljYXRpb24gdGhpcyBtb2R1bGUgY2FuIGJlIHNhZmVseSByZW1vdmVkLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbGllbnRBdXRoU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbGllbnRBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDbGllbnRBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uaW50ZXJjZXB0b3JzXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
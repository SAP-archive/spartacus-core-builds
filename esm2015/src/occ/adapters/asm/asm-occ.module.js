import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AsmAdapter } from '../../../asm/connectors/asm.adapter';
import { defaultOccAsmConfig } from './default-occ-asm-config';
import { OccAsmAdapter } from './occ-asm.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
export class AsmOccModule {
}
AsmOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    provideDefaultConfig(defaultOccAsmConfig),
                    {
                        provide: AsmAdapter,
                        useClass: OccAsmAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvYXNtL2FzbS1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFZeEUsTUFBTSxPQUFPLFlBQVk7OztZQVZ4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsbUJBQW1CLENBQUM7b0JBQ3pDO3dCQUNFLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixRQUFRLEVBQUUsYUFBYTtxQkFDeEI7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9hc20uYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQXNtQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1hc20tY29uZmlnJztcbmltcG9ydCB7IE9jY0FzbUFkYXB0ZXIgfSBmcm9tICcuL29jYy1hc20uYWRhcHRlcic7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NBc21Db25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFzbUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQXNtQWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21PY2NNb2R1bGUge31cbiJdfQ==
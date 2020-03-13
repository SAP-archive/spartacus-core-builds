import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AsmAdapter } from '../../../asm/connectors/asm.adapter';
import { provideDefaultConfig } from '../../../config/config.module';
import { defaultOccAsmConfig } from './default-occ-asm-config';
import { OccAsmAdapter } from './occ-asm.adapter';
let AsmOccModule = class AsmOccModule {
};
AsmOccModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [
            provideDefaultConfig(defaultOccAsmConfig),
            {
                provide: AsmAdapter,
                useClass: OccAsmAdapter,
            },
        ],
    })
], AsmOccModule);
export { AsmOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2FzbS9hc20tb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVlsRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFWeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO1FBQ3pDLFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLG1CQUFtQixDQUFDO1lBQ3pDO2dCQUNFLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixRQUFRLEVBQUUsYUFBYTthQUN4QjtTQUNGO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBRztTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBc21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2Nvbm5lY3RvcnMvYXNtLmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQXNtQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1hc20tY29uZmlnJztcbmltcG9ydCB7IE9jY0FzbUFkYXB0ZXIgfSBmcm9tICcuL29jYy1hc20uYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0T2NjQXNtQ29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBc21BZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0FzbUFkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXNtT2NjTW9kdWxlIHt9XG4iXX0=
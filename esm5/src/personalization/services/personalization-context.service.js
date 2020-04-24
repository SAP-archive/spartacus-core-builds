import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PersonalizationConfig } from '../config/personalization-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/personalization-config";
import * as i2 from "../../cms/facade/cms.service";
var PersonalizationContextService = /** @class */ (function () {
    function PersonalizationContextService(config, cmsService) {
        this.config = config;
        this.cmsService = cmsService;
    }
    PersonalizationContextService.prototype.getPersonalizationContext = function () {
        var _this = this;
        return this.cmsService.getCurrentPage().pipe(filter(Boolean), map(function (page) {
            return page.slots[_this.config.personalization.context.slotPosition];
        }), filter(Boolean), map(function (slot) {
            return slot.components.find(function (i) { return i.uid === _this.config.personalization.context.componentId; });
        }), filter(Boolean), map(function (component) {
            return _this.buildPersonalizationContext(component.properties.script.data);
        }));
    };
    PersonalizationContextService.prototype.buildPersonalizationContext = function (data) {
        var context = JSON.parse(atob(data));
        context.actions.forEach(function (action) {
            Object.keys(action).forEach(function (key) {
                action[key] = atob(action[key]);
            });
        });
        for (var i = 0; i < context.segments.length; i++) {
            context.segments[i] = atob(context.segments[i]);
        }
        return context;
    };
    PersonalizationContextService.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: CmsService }
    ]; };
    PersonalizationContextService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PersonalizationContextService_Factory() { return new PersonalizationContextService(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.CmsService)); }, token: PersonalizationContextService, providedIn: "root" });
    PersonalizationContextService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PersonalizationContextService);
    return PersonalizationContextService;
}());
export { PersonalizationContextService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vc2VydmljZXMvcGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUkxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQU16RTtJQUNFLHVDQUNZLE1BQTZCLEVBQzdCLFVBQXNCO1FBRHRCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDL0IsQ0FBQztJQUVKLGlFQUF5QixHQUF6QjtRQUFBLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUNELFVBQUMsSUFBVTtZQUNULE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQTVELENBQTRELENBQy9ELEVBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLElBQXFCO1lBQ3hCLE9BQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUF6RCxDQUF5RCxDQUNqRTtRQUZELENBRUMsQ0FDRixFQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxTQUFtQztZQUN0QyxPQUFBLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFBbEUsQ0FBa0UsQ0FDbkUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLG1FQUEyQixHQUFuQyxVQUFvQyxJQUFZO1FBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQW5DbUIscUJBQXFCO2dCQUNqQixVQUFVOzs7SUFIdkIsNkJBQTZCO1FBSHpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyw2QkFBNkIsQ0FzQ3pDO3dDQW5ERDtDQW1EQyxBQXRDRCxJQXNDQztTQXRDWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuLi9jb25maWcvcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db250ZXh0IH0gZnJvbSAnLi4vbW9kZWwvcGVyc29uYWxpemF0aW9uLWNvbnRleHQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uQ29udGV4dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBQZXJzb25hbGl6YXRpb25Db25maWcsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFBlcnNvbmFsaXphdGlvbkNvbnRleHQoKTogT2JzZXJ2YWJsZTxQZXJzb25hbGl6YXRpb25Db250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoXG4gICAgICAgIChwYWdlOiBQYWdlKSA9PlxuICAgICAgICAgIHBhZ2Uuc2xvdHNbdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmNvbnRleHQuc2xvdFBvc2l0aW9uXVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoc2xvdDogQ29udGVudFNsb3REYXRhKSA9PlxuICAgICAgICBzbG90LmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICAoaSkgPT4gaS51aWQgPT09IHRoaXMuY29uZmlnLnBlcnNvbmFsaXphdGlvbi5jb250ZXh0LmNvbXBvbmVudElkXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbXBvbmVudDogQ29udGVudFNsb3RDb21wb25lbnREYXRhKSA9PlxuICAgICAgICB0aGlzLmJ1aWxkUGVyc29uYWxpemF0aW9uQ29udGV4dChjb21wb25lbnQucHJvcGVydGllcy5zY3JpcHQuZGF0YSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFBlcnNvbmFsaXphdGlvbkNvbnRleHQoZGF0YTogc3RyaW5nKTogUGVyc29uYWxpemF0aW9uQ29udGV4dCB7XG4gICAgY29uc3QgY29udGV4dCA9IEpTT04ucGFyc2UoYXRvYihkYXRhKSk7XG4gICAgY29udGV4dC5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoYWN0aW9uKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgYWN0aW9uW2tleV0gPSBhdG9iKGFjdGlvbltrZXldKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGV4dC5zZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29udGV4dC5zZWdtZW50c1tpXSA9IGF0b2IoY29udGV4dC5zZWdtZW50c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXX0=
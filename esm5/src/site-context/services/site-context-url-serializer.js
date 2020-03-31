import { __decorate, __extends, __read } from "tslib";
import { Injectable } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';
import { SiteContextParamsService } from './site-context-params.service';
var UrlSplit = /(^[^#?]*)(.*)/; // used to split url into path and query/fragment parts
var SiteContextUrlSerializer = /** @class */ (function (_super) {
    __extends(SiteContextUrlSerializer, _super);
    function SiteContextUrlSerializer(siteContextParams) {
        var _this = _super.call(this) || this;
        _this.siteContextParams = siteContextParams;
        return _this;
    }
    Object.defineProperty(SiteContextUrlSerializer.prototype, "urlEncodingParameters", {
        get: function () {
            return this.siteContextParams.getUrlEncodingParameters();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextUrlSerializer.prototype, "hasContextInRoutes", {
        get: function () {
            return this.urlEncodingParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    SiteContextUrlSerializer.prototype.parse = function (url) {
        if (this.hasContextInRoutes) {
            var urlWithParams = this.urlExtractContextParameters(url);
            var parsed = _super.prototype.parse.call(this, urlWithParams.url);
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return _super.prototype.parse.call(this, url);
        }
    };
    SiteContextUrlSerializer.prototype.urlExtractContextParameters = function (url) {
        var _a = __read(url.match(UrlSplit), 3), urlPart = _a[1], queryPart = _a[2];
        var segments = urlPart.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        var params = {};
        var paramId = 0;
        var segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            var paramName = this.urlEncodingParameters[paramId];
            var paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.includes(segments[segmentId])) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/') + queryPart;
        return { url: url, params: params };
    };
    SiteContextUrlSerializer.prototype.urlTreeIncludeContextParameters = function (urlTree, params) {
        urlTree.siteContext = params;
    };
    SiteContextUrlSerializer.prototype.serialize = function (tree) {
        var params = this.urlTreeExtractContextParameters(tree);
        var url = _super.prototype.serialize.call(this, tree);
        var serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    };
    SiteContextUrlSerializer.prototype.urlTreeExtractContextParameters = function (urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    };
    SiteContextUrlSerializer.prototype.urlIncludeContextParameters = function (url, params) {
        var _this = this;
        var contextRoutePart = this.urlEncodingParameters
            .map(function (param) {
            return params[param]
                ? params[param]
                : _this.siteContextParams.getValue(param);
        })
            .join('/');
        return contextRoutePart + url;
    };
    SiteContextUrlSerializer.ctorParameters = function () { return [
        { type: SiteContextParamsService }
    ]; };
    SiteContextUrlSerializer = __decorate([
        Injectable()
    ], SiteContextUrlSerializer);
    return SiteContextUrlSerializer;
}(DefaultUrlSerializer));
export { SiteContextUrlSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFVekUsSUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLENBQUMsdURBQXVEO0FBR3pGO0lBQThDLDRDQUFvQjtJQVNoRSxrQ0FBb0IsaUJBQTJDO1FBQS9ELFlBQ0UsaUJBQU8sU0FDUjtRQUZtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQTBCOztJQUUvRCxDQUFDO0lBVkQsc0JBQVksMkRBQXFCO2FBQWpDO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdEQUFrQjthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFNRCx3Q0FBSyxHQUFMLFVBQU0sR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1RCxJQUFNLE1BQU0sR0FBRyxpQkFBTSxLQUFLLFlBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBMkIsQ0FBQztZQUN4RSxJQUFJLENBQUMsK0JBQStCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRSxPQUFP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QztDQUFBLEFBdEZELENBQThDLG9CQUFvQixHQXNGakU7U0F0Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtVmFsdWVzTWFwIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IGV4dGVuZHMgVXJsVHJlZSB7XG4gIHNpdGVDb250ZXh0PzogUGFyYW1WYWx1ZXNNYXA7XG59XG5cbmNvbnN0IFVybFNwbGl0ID0gLyheW14jP10qKSguKikvOyAvLyB1c2VkIHRvIHNwbGl0IHVybCBpbnRvIHBhdGggYW5kIHF1ZXJ5L2ZyYWdtZW50IHBhcnRzXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgZXh0ZW5kcyBEZWZhdWx0VXJsU2VyaWFsaXplciB7XG4gIHByaXZhdGUgZ2V0IHVybEVuY29kaW5nUGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0VXJsRW5jb2RpbmdQYXJhbWV0ZXJzKCk7XG4gIH1cblxuICBnZXQgaGFzQ29udGV4dEluUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGV4dEluUm91dGVzKSB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHN1cGVyLnBhcnNlKHVybFdpdGhQYXJhbXMudXJsKSBhcyBVcmxUcmVlV2l0aFNpdGVDb250ZXh0O1xuICAgICAgdGhpcy51cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHBhcnNlZCwgdXJsV2l0aFBhcmFtcy5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybDogc3RyaW5nXG4gICk6IHsgdXJsOiBzdHJpbmc7IHBhcmFtczogUGFyYW1WYWx1ZXNNYXAgfSB7XG4gICAgY29uc3QgWywgdXJsUGFydCwgcXVlcnlQYXJ0XSA9IHVybC5tYXRjaChVcmxTcGxpdCk7XG5cbiAgICBjb25zdCBzZWdtZW50cyA9IHVybFBhcnQuc3BsaXQoJy8nKTtcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnKSB7XG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGxldCBwYXJhbUlkID0gMDtcbiAgICBsZXQgc2VnbWVudElkID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBwYXJhbUlkIDwgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoICYmXG4gICAgICBzZWdtZW50SWQgPCBzZWdtZW50cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzW3BhcmFtSWRdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFBhcmFtVmFsdWVzKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlcy5pbmNsdWRlcyhzZWdtZW50c1tzZWdtZW50SWRdKSkge1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHNlZ21lbnRzW3NlZ21lbnRJZF07XG4gICAgICAgIHNlZ21lbnRJZCsrO1xuICAgICAgfVxuICAgICAgcGFyYW1JZCsrO1xuICAgIH1cblxuICAgIHVybCA9IHNlZ21lbnRzLnNsaWNlKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKS5qb2luKCcvJykgKyBxdWVyeVBhcnQ7XG4gICAgcmV0dXJuIHsgdXJsLCBwYXJhbXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0LFxuICAgIHBhcmFtczogUGFyYW1WYWx1ZXNNYXBcbiAgKSB7XG4gICAgdXJsVHJlZS5zaXRlQ29udGV4dCA9IHBhcmFtcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModHJlZSk7XG4gICAgY29uc3QgdXJsID0gc3VwZXIuc2VyaWFsaXplKHRyZWUpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gIH1cblxuICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHRcbiAgKTogUGFyYW1WYWx1ZXNNYXAge1xuICAgIHJldHVybiB1cmxUcmVlLnNpdGVDb250ZXh0ID8gdXJsVHJlZS5zaXRlQ29udGV4dCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1WYWx1ZXNNYXApIHtcbiAgICBjb25zdCBjb250ZXh0Um91dGVQYXJ0ID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgIC5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgPyBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLycpO1xuXG4gICAgcmV0dXJuIGNvbnRleHRSb3V0ZVBhcnQgKyB1cmw7XG4gIH1cbn1cbiJdfQ==
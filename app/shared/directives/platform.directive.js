"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var IfAndroidDirective = (function () {
    function IfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    return IfAndroidDirective;
}());
IfAndroidDirective = __decorate([
    core_1.Directive({ selector: "[nsIfAndroid]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], IfAndroidDirective);
exports.IfAndroidDirective = IfAndroidDirective;
var IfIosDirective = (function () {
    function IfIosDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    return IfIosDirective;
}());
IfIosDirective = __decorate([
    core_1.Directive({ selector: "[nsIfIos]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], IfIosDirective);
exports.IfIosDirective = IfIosDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhdGZvcm0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLHFDQUFpRDtBQUNqRCw4RUFBaUU7QUFHakUsSUFBYSxrQkFBa0I7SUFDN0IsNEJBQTRCLE1BQWMsRUFBRSxTQUEyQixFQUFFLFdBQWdDO1FBQ3ZHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssd0JBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxrQkFBa0I7SUFEOUIsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUUxQixXQUFBLGFBQU0sQ0FBQywyQkFBTSxDQUFDLENBQUE7NkNBQTRCLHVCQUFnQixFQUFlLGtCQUFXO0dBRHRGLGtCQUFrQixDQU05QjtBQU5ZLGdEQUFrQjtBQVMvQixJQUFhLGNBQWM7SUFDekIsd0JBQTRCLE1BQWMsRUFBRSxTQUEyQixFQUFFLFdBQWdDO1FBQ3ZHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssd0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxjQUFjO0lBRDFCLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFFdEIsV0FBQSxhQUFNLENBQUMsMkJBQU0sQ0FBQyxDQUFBOzZDQUE0Qix1QkFBZ0IsRUFBZSxrQkFBVztHQUR0RixjQUFjLENBTTFCO0FBTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEZXZpY2UsIHBsYXRmb3JtTmFtZXMgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgREVWSUNFIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLXByb3ZpZGVyc1wiO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIltuc0lmQW5kcm9pZF1cIiB9KVxyXG5leHBvcnQgY2xhc3MgSWZBbmRyb2lkRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFVklDRSkgZGV2aWNlOiBEZXZpY2UsIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4pIHtcclxuICAgIGlmIChkZXZpY2Uub3MgPT09IHBsYXRmb3JtTmFtZXMuYW5kcm9pZCkge1xyXG4gICAgICBjb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJbbnNJZklvc11cIiB9KVxyXG5leHBvcnQgY2xhc3MgSWZJb3NEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xyXG4gICAgaWYgKGRldmljZS5vcyA9PT0gcGxhdGZvcm1OYW1lcy5pb3MpIHtcclxuICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
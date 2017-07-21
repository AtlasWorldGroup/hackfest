"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared = require("../../shared");
var TabMenuComponent = (function () {
    function TabMenuComponent(_navigationService, _router) {
        this._navigationService = _navigationService;
        this._router = _router;
    }
    TabMenuComponent.prototype.ngOnInit = function () {
        this.navigationItems = this._navigationService.routes;
    };
    return TabMenuComponent;
}());
TabMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-tab-menu",
        templateUrl: "tabstrip.component.html"
    }),
    __metadata("design:paramtypes", [shared.NavigationService, router_1.Router])
], TabMenuComponent);
exports.TabMenuComponent = TabMenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic3RyaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFic3RyaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUd6QyxxQ0FBdUM7QUFPdkMsSUFBYSxnQkFBZ0I7SUFHM0IsMEJBQ1Usa0JBQTRDLEVBQzVDLE9BQWU7UUFEZix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBCO1FBQzVDLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDdEIsQ0FBQztJQUVKLG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7SUFDeEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUseUJBQXlCO0tBQ3ZDLENBQUM7cUNBSzhCLE1BQU0sQ0FBQyxpQkFBaUIsRUFDbkMsZUFBTTtHQUxkLGdCQUFnQixDQVc1QjtBQVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gXCIuLi9zaGFyZWRcIjtcclxuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwibnMtdGFiLW1lbnVcIixcclxuICB0ZW1wbGF0ZVVybDogXCJ0YWJzdHJpcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuYXZpZ2F0aW9uSXRlbXM6IEFycmF5PHNoYXJlZC5OYXZpZ2F0aW9uSXRlbT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IHNoYXJlZC5OYXZpZ2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkl0ZW1zID0gdGhpcy5fbmF2aWdhdGlvblNlcnZpY2Uucm91dGVzO1xyXG4gIH1cclxufVxyXG4iXX0=
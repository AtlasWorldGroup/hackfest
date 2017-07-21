"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common = require("./shared");
var dialogs = require("ui/dialogs");
var HomeViewComponent = (function () {
    /// component additional properties
    function HomeViewComponent(_service) {
        this._service = _service;
        this.id = '';
    }
    Object.defineProperty(HomeViewComponent.prototype, "title", {
        get: function () {
            var result = "Home View";
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return HomeViewComponent;
}());
HomeViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-homeView",
        templateUrl: "homeView.component.html"
        /// component definitions
    }),
    __metadata("design:paramtypes", [common.HomeViewService])
], HomeViewComponent);
exports.HomeViewComponent = HomeViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZVZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBQ3ZDLGlDQUFtQztBQUtuQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFVdEMsSUFBYSxpQkFBaUI7SUFRMUIsbUNBQW1DO0lBQ25DLDJCQUFvQixRQUFnQztRQUFoQyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQVJwRCxPQUFFLEdBQVcsRUFBRSxDQUFDO0lBV2hCLENBQUM7SUFURCxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ksSUFBSSxNQUFNLEdBQVcsV0FBVyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFRTCx3QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksaUJBQWlCO0lBUDFCLGdCQUFTLENBQUM7UUFDTixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0Qyx5QkFBeUI7S0FDNUIsQ0FBQztxQ0FXNEIsTUFBTSxDQUFDLGVBQWU7R0FUM0MsaUJBQWlCLENBYzdCO0FBZFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gXCIuL3NoYXJlZFwiO1xyXG5pbXBvcnQgKiBhcyBzaGFyZWQgZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7RXZlbnREYXRhfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmNvbnN0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuXHJcbkBcclxuICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgICAgICBzZWxlY3RvcjogXCJucy1ob21lVmlld1wiLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImhvbWVWaWV3LmNvbXBvbmVudC5odG1sXCJcclxuICAgICAgICAvLy8gY29tcG9uZW50IGRlZmluaXRpb25zXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3Q29tcG9uZW50IHtcclxuICAgIGlkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nID0gXCJIb21lIFZpZXdcIjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyBjb21wb25lbnQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBjb21tb24uSG9tZVZpZXdTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
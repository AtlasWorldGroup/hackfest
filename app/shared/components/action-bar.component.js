"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("../enums");
var services_1 = require("../services");
var ActionBarComponent = (function () {
    function ActionBarComponent(_navigationService) {
        this._navigationService = _navigationService;
        this.back = new core_1.EventEmitter();
        this._modes = enums_1.NavigationModes;
        this._mode = _navigationService.mode;
        if (this._mode === this._modes.DRAWER) {
            this.showDrawer = true;
            this.showIndex = false;
        }
        else if (this._mode === this._modes.LISTMENU) {
            this.showDrawer = false;
            this.showIndex = true;
        }
        else {
            this.showDrawer = false;
            this.showIndex = false;
        }
    }
    ActionBarComponent.prototype.onIndex = function () {
        this._navigationService.navigateIndex();
    };
    ActionBarComponent.prototype.onDrawer = function () {
        this._navigationService.toggleDrawer();
    };
    ActionBarComponent.prototype.onBack = function () {
        this.back.emit();
    };
    return ActionBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActionBarComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showBack", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showDrawer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showIndex", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "back", void 0);
ActionBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-action-bar",
        templateUrl: "action-bar.component.html"
    }),
    __metadata("design:paramtypes", [services_1.NavigationService])
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUV2RSxrQ0FBMkM7QUFDM0Msd0NBQWdEO0FBT2hELElBQWEsa0JBQWtCO0lBVzNCLDRCQUNZLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBTnZDLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUU1QixXQUFNLEdBQUcsdUJBQWUsQ0FBQztRQU03QixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUVyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXRDWTtJQUFSLFlBQUssRUFBRTs7aURBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7b0RBQW1CO0FBQ2xCO0lBQVIsWUFBSyxFQUFFOztzREFBcUI7QUFDcEI7SUFBUixZQUFLLEVBQUU7O3FEQUFvQjtBQUVsQjtJQUFULGFBQU0sRUFBRTs7Z0RBQTJCO0FBTjNCLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztxQ0Fha0MsNEJBQWlCO0dBWnhDLGtCQUFrQixDQXVDOUI7QUF2Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvbk1vZGVzIH0gZnJvbSBcIi4uL2VudW1zXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1hY3Rpb24tYmFyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkJhckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2hvd0JhY2s6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzaG93RHJhd2VyOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc2hvd0luZGV4OiBib29sZWFuO1xyXG5cclxuICAgIEBPdXRwdXQoKSBiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHByaXZhdGUgX21vZGVzID0gTmF2aWdhdGlvbk1vZGVzO1xyXG4gICAgcHJpdmF0ZSBfbW9kZTogTmF2aWdhdGlvbk1vZGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IF9uYXZpZ2F0aW9uU2VydmljZS5tb2RlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbW9kZSA9PT0gdGhpcy5fbW9kZXMuRFJBV0VSKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RyYXdlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0luZGV4ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9tb2RlID09PSB0aGlzLl9tb2Rlcy5MSVNUTUVOVSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEcmF3ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5kZXggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RyYXdlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlSW5kZXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlcigpIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrLmVtaXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
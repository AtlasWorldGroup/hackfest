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

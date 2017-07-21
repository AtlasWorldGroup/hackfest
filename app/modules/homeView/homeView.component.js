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

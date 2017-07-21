"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../../shared/shared.module");
var homeView_component_1 = require("./homeView.component");
var common = require("./shared");
var HomeViewModule = (function () {
    function HomeViewModule() {
    }
    return HomeViewModule;
}());
HomeViewModule = __decorate([
    core_1.NgModule({
        imports: [
            /// module imports declaration
            nativescript_module_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            /// module declarations
            homeView_component_1.HomeViewComponent
        ],
        exports: [
            /// module exports
            homeView_component_1.HomeViewComponent
        ],
        providers: [
            /// module providers
            common.HomeViewService
        ]
    })
], HomeViewModule);
exports.HomeViewModule = HomeViewModule;

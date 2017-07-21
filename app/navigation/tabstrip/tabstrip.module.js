"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var tabstrip_routes_1 = require("./tabstrip.routes");
var tabstrip_component_1 = require("./tabstrip.component");
var shared_module_1 = require("../../shared/shared.module");
var common = require("../shared");
var TabstripMenuModule = (function () {
    function TabstripMenuModule() {
    }
    return TabstripMenuModule;
}());
TabstripMenuModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            tabstrip_routes_1.tabMenuRouting,
            shared_module_1.SharedModule
        ].concat(common.MODULES),
        declarations: [
            tabstrip_component_1.TabMenuComponent
        ]
    })
], TabstripMenuModule);
exports.TabstripMenuModule = TabstripMenuModule;

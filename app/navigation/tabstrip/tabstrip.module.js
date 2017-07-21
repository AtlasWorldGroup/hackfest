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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic3RyaXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFic3RyaXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLGdGQUE4RTtBQUM5RSxzREFBdUU7QUFFdkUscURBQW1EO0FBQ25ELDJEQUF3RDtBQUN4RCw0REFBMEQ7QUFFMUQsa0NBQW9DO0FBZXBDLElBQWEsa0JBQWtCO0lBQS9CO0lBQWtDLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFBbkMsSUFBbUM7QUFBdEIsa0JBQWtCO0lBWjlCLGVBQVEsQ0FBQztRQUNSLE9BQU87WUFDTCx3Q0FBa0I7WUFDbEIsaUNBQXdCO1lBQ3hCLGdDQUFjO1lBQ2QsNEJBQVk7aUJBQ1QsTUFBTSxDQUFDLE9BQU8sQ0FDbEI7UUFDRCxZQUFZLEVBQUU7WUFDWixxQ0FBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBQUk7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdGFiTWVudVJvdXRpbmcgfSBmcm9tIFwiLi90YWJzdHJpcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHsgVGFiTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYnN0cmlwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tIFwiLi4vc2hhcmVkXCI7XHJcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgIHRhYk1lbnVSb3V0aW5nLFxyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgLi4uY29tbW9uLk1PRFVMRVNcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGFiTWVudUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnN0cmlwTWVudU1vZHVsZSB7IH1cclxuIl19
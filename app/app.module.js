"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
/// additional imports
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
/// additional required modules
var tabstrip_module_1 = require("./navigation/tabstrip/tabstrip.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.NativeScriptHttpModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            tabstrip_module_1.TabstripMenuModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFDdEMsa0RBQWdFO0FBRWhFLGdGQUEyRTtBQUMzRSxzREFBb0U7QUFDcEUsc0JBQXNCO0FBRXRCLDJDQUFzQztBQUN0QyxpREFBNEM7QUFFNUMsK0JBQStCO0FBRS9CLHlFQUE0RjtBQWlCNUYsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxTQUFTO0lBZnJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZCQUFzQjtZQUN0Qix3Q0FBa0I7WUFDbEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxzQkFBUyxDQUFDO1lBQzNDLG9DQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FDckI7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiXHJcblxyXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX1mcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX1mcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vLyBhZGRpdGlvbmFsIGltcG9ydHNcclxuXHJcbmltcG9ydCB7YXBwUm91dGVzfWZyb20gXCIuL2FwcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuLy8vIGFkZGl0aW9uYWwgcmVxdWlyZWQgbW9kdWxlc1xyXG5cclxuaW1wb3J0IHtUYWJzdHJpcE1lbnVNb2R1bGUgYXMgTmF2aWdhdGlvbk1vZHVsZX1mcm9tIFwiLi9uYXZpZ2F0aW9uL3RhYnN0cmlwL3RhYnN0cmlwLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSxcclxuICAgICAgICBOYXZpZ2F0aW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59Il19
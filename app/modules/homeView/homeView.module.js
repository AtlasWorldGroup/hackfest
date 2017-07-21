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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZVZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBRXRDLGdGQUEyRTtBQUUzRSw0REFBdUQ7QUFDdkQsMkRBQXNEO0FBRXRELGlDQUFtQztBQXVCbkMsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxjQUFjO0lBcEIxQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCw4QkFBOEI7WUFDOUIsd0NBQWtCO1lBQ2xCLDRCQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDVix1QkFBdUI7WUFDdkIsc0NBQWlCO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsa0JBQWtCO1lBQ2xCLHNDQUFpQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNQLG9CQUFvQjtZQUNwQixNQUFNLENBQUMsZUFBZTtTQUN6QjtLQUNKLENBQUM7R0FFVyxjQUFjLENBQzFCO0FBRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfWZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX1mcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHtTaGFyZWRNb2R1bGV9ZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7SG9tZVZpZXdDb21wb25lbnR9ZnJvbSBcIi4vaG9tZVZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSBcIi4vc2hhcmVkXCI7XHJcbmltcG9ydCAqIGFzIHNoYXJlZCBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIC8vLyBtb2R1bGUgaW1wb3J0cyBkZWNsYXJhdGlvblxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAvLy8gbW9kdWxlIGRlY2xhcmF0aW9uc1xyXG4gICAgICAgIEhvbWVWaWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIC8vLyBtb2R1bGUgZXhwb3J0c1xyXG4gICAgICAgIEhvbWVWaWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLy8vIG1vZHVsZSBwcm92aWRlcnNcclxuICAgICAgICBjb21tb24uSG9tZVZpZXdTZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2R1bGUge1xyXG59Il19
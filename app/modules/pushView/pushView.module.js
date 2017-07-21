"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../../shared/shared.module");
var pushView_component_1 = require("./pushView.component");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
// START_CUSTOM_CODE_pushViewModelModuleImports
// END_CUSTOM_CODE_pushViewModelModuleImports
/// module additional imports
var common = require("./shared");
var PushViewModule = (function () {
    function PushViewModule() {
    }
    return PushViewModule;
}());
PushViewModule = __decorate([
    core_1.NgModule({
        imports: [
            // START_CUSTOM_CODE_pushViewModelModuleImportDeclarations
            // END_CUSTOM_CODE_pushViewModelModuleImportDeclarations
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            /// module imports declaration
            nativescript_module_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            /// module declarations
            pushView_component_1.PushViewComponent
        ],
        exports: [
            /// module exports
            pushView_component_1.PushViewComponent
        ],
        providers: [
            // START_CUSTOM_CODE_pushViewModelModuleProviders
            // END_CUSTOM_CODE_pushViewModelModuleProviders
            /// module providers
            common.PushViewService
        ]
    })
], PushViewModule);
exports.PushViewModule = PushViewModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaFZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVzaFZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBRXRDLGdGQUEyRTtBQUUzRSw0REFBdUQ7QUFDdkQsMkRBQXNEO0FBRXRELG9EQUFrRTtBQUNsRSxzREFBb0U7QUFDcEUsK0NBQStDO0FBRS9DLDZDQUE2QztBQUM3Qyw2QkFBNkI7QUFFN0IsaUNBQW1DO0FBb0NuQyxJQUFhLGNBQWM7SUFBM0I7SUFBNkIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUE5QixJQUE4QjtBQUFqQixjQUFjO0lBakMxQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFFTCwwREFBMEQ7WUFFMUQsd0RBQXdEO1lBQ3hELGlDQUF3QjtZQUN4QiwrQkFBdUI7WUFDdkIsOEJBQThCO1lBRTlCLHdDQUFrQjtZQUNsQiw0QkFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsdUJBQXVCO1lBQ3ZCLHNDQUFpQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNMLGtCQUFrQjtZQUNsQixzQ0FBaUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFFUCxpREFBaUQ7WUFFakQsK0NBQStDO1lBRS9DLG9CQUFvQjtZQUVwQixNQUFNLENBQUMsZUFBZTtTQUN6QjtLQUNKLENBQUM7R0FFVyxjQUFjLENBQUc7QUFBakIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfWZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX1mcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHtTaGFyZWRNb2R1bGV9ZnJvbSBcIi4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7UHVzaFZpZXdDb21wb25lbnR9ZnJvbSBcIi4vcHVzaFZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfWZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX1mcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbi8vIFNUQVJUX0NVU1RPTV9DT0RFX3B1c2hWaWV3TW9kZWxNb2R1bGVJbXBvcnRzXHJcblxyXG4vLyBFTkRfQ1VTVE9NX0NPREVfcHVzaFZpZXdNb2RlbE1vZHVsZUltcG9ydHNcclxuLy8vIG1vZHVsZSBhZGRpdGlvbmFsIGltcG9ydHNcclxuXHJcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tIFwiLi9zaGFyZWRcIjtcclxuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcblxyXG4gICAgICAgIC8vIFNUQVJUX0NVU1RPTV9DT0RFX3B1c2hWaWV3TW9kZWxNb2R1bGVJbXBvcnREZWNsYXJhdGlvbnNcclxuXHJcbiAgICAgICAgLy8gRU5EX0NVU1RPTV9DT0RFX3B1c2hWaWV3TW9kZWxNb2R1bGVJbXBvcnREZWNsYXJhdGlvbnNcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgLy8vIG1vZHVsZSBpbXBvcnRzIGRlY2xhcmF0aW9uXHJcblxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICAvLy8gbW9kdWxlIGRlY2xhcmF0aW9uc1xyXG4gICAgICAgIFB1c2hWaWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIC8vLyBtb2R1bGUgZXhwb3J0c1xyXG4gICAgICAgIFB1c2hWaWV3Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcblxyXG4gICAgICAgIC8vIFNUQVJUX0NVU1RPTV9DT0RFX3B1c2hWaWV3TW9kZWxNb2R1bGVQcm92aWRlcnNcclxuXHJcbiAgICAgICAgLy8gRU5EX0NVU1RPTV9DT0RFX3B1c2hWaWV3TW9kZWxNb2R1bGVQcm92aWRlcnNcclxuXHJcbiAgICAgICAgLy8vIG1vZHVsZSBwcm92aWRlcnNcclxuXHJcbiAgICAgICAgY29tbW9uLlB1c2hWaWV3U2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hWaWV3TW9kdWxlIHt9Il19
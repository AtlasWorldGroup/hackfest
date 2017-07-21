"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var common = require("./");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            /// additional declarations
            common.ActionBarComponent,
            common.IfAndroidDirective,
            common.IfIosDirective,
            common.HyperlinkDirective,
            angular_1.LISTVIEW_DIRECTIVES
        ],
        exports: [
            /// additional exports
            common.ActionBarComponent,
            common.IfAndroidDirective,
            common.IfIosDirective,
            common.HyperlinkDirective,
            angular_1.LISTVIEW_DIRECTIVES
        ],
        providers: [
            /// additional services
            common.NavigationService,
            common.NotificationService,
            common.BackendService
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;

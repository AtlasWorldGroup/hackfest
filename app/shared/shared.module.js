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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUM7QUFHdkMsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSxvRUFBNkU7QUFFN0UsMkJBQTZCO0FBOEI3QixJQUFhLFlBQVk7SUFBekI7SUFDQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFlBQVk7SUE1QnhCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViwyQkFBMkI7WUFDM0IsTUFBTSxDQUFDLGtCQUFrQjtZQUN6QixNQUFNLENBQUMsa0JBQWtCO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjO1lBQ3JCLE1BQU0sQ0FBQyxrQkFBa0I7WUFDekIsNkJBQW1CO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsc0JBQXNCO1lBQ3RCLE1BQU0sQ0FBQyxrQkFBa0I7WUFDekIsTUFBTSxDQUFDLGtCQUFrQjtZQUN6QixNQUFNLENBQUMsY0FBYztZQUNyQixNQUFNLENBQUMsa0JBQWtCO1lBQ3pCLDZCQUFtQjtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNQLHVCQUF1QjtZQUN2QixNQUFNLENBQUMsaUJBQWlCO1lBQ3hCLE1BQU0sQ0FBQyxtQkFBbUI7WUFDMUIsTUFBTSxDQUFDLGNBQWM7U0FDeEI7S0FDSixDQUFDO0dBQ1csWUFBWSxDQUN4QjtBQURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7TElTVFZJRVdfRElSRUNUSVZFU30gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSBcIi4vXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIC8vLyBhZGRpdGlvbmFsIGRlY2xhcmF0aW9uc1xyXG4gICAgICAgIGNvbW1vbi5BY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgY29tbW9uLklmQW5kcm9pZERpcmVjdGl2ZSxcclxuICAgICAgICBjb21tb24uSWZJb3NEaXJlY3RpdmUsXHJcbiAgICAgICAgY29tbW9uLkh5cGVybGlua0RpcmVjdGl2ZSxcclxuICAgICAgICBMSVNUVklFV19ESVJFQ1RJVkVTXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIC8vLyBhZGRpdGlvbmFsIGV4cG9ydHNcclxuICAgICAgICBjb21tb24uQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIGNvbW1vbi5JZkFuZHJvaWREaXJlY3RpdmUsXHJcbiAgICAgICAgY29tbW9uLklmSW9zRGlyZWN0aXZlLFxyXG4gICAgICAgIGNvbW1vbi5IeXBlcmxpbmtEaXJlY3RpdmUsXHJcbiAgICAgICAgTElTVFZJRVdfRElSRUNUSVZFU1xyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC8vLyBhZGRpdGlvbmFsIHNlcnZpY2VzXHJcbiAgICAgICAgY29tbW9uLk5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIGNvbW1vbi5Ob3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIGNvbW1vbi5CYWNrZW5kU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxufVxyXG4iXX0=
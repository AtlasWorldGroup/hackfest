import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {LISTVIEW_DIRECTIVES} from 'nativescript-telerik-ui/listview/angular';

import * as common from "./";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        /// additional declarations
        common.ActionBarComponent,
        common.IfAndroidDirective,
        common.IfIosDirective,
        common.HyperlinkDirective,
        LISTVIEW_DIRECTIVES
    ],
    exports: [
        /// additional exports
        common.ActionBarComponent,
        common.IfAndroidDirective,
        common.IfIosDirective,
        common.HyperlinkDirective,
        LISTVIEW_DIRECTIVES
    ],
    providers: [
        /// additional services
        common.NavigationService,
        common.NotificationService,
        common.BackendService
    ]
})
export class SharedModule {
}

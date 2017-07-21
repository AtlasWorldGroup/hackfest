import {NgModule}from "@angular/core";
import {NativeScriptHttpModule} from "nativescript-angular/http"

import {NativeScriptModule}from "nativescript-angular/nativescript.module";
import {NativeScriptRouterModule}from "nativescript-angular/router";
/// additional imports

import {appRoutes}from "./app.routes";
import {AppComponent}from "./app.component";

/// additional required modules

import {TabstripMenuModule as NavigationModule}from "./navigation/tabstrip/tabstrip.module";

@NgModule({
    imports: [
        NativeScriptHttpModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NavigationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
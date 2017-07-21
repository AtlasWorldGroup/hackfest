import {NgModule}from "@angular/core";

import {NativeScriptModule}from "nativescript-angular/nativescript.module";

import {SharedModule}from "../../shared/shared.module";
import {PushViewComponent}from "./pushView.component";

import {NativeScriptFormsModule}from "nativescript-angular/forms";
import {NativeScriptRouterModule}from "nativescript-angular/router";
// START_CUSTOM_CODE_pushViewModelModuleImports

// END_CUSTOM_CODE_pushViewModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@NgModule({
    imports: [

        // START_CUSTOM_CODE_pushViewModelModuleImportDeclarations

        // END_CUSTOM_CODE_pushViewModelModuleImportDeclarations
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [
        /// module declarations
        PushViewComponent
    ],
    exports: [
        /// module exports
        PushViewComponent
    ],
    providers: [

        // START_CUSTOM_CODE_pushViewModelModuleProviders

        // END_CUSTOM_CODE_pushViewModelModuleProviders

        /// module providers

        common.PushViewService
    ]
})

export class PushViewModule {}
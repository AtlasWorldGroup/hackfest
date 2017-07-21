import {Component}from "@angular/core";
import * as common from "./shared";
import * as shared from "../../shared";
import { Label } from "ui/label";
import { Button } from "ui/button";
import {EventData} from "data/observable";
const dialogs = require("ui/dialogs");

@
    Component({
        moduleId: module.id,
        selector: "ns-homeView",
        templateUrl: "homeView.component.html"
        /// component definitions
    })

export class HomeViewComponent {
    id: string = '';

    get title() {
        let result: string = "Home View";
        return result;
    }

    /// component additional properties
    constructor(private _service: common.HomeViewService) {


    }

}
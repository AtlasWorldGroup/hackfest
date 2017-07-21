"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// modules imports
var pushView_component_1 = require("../../modules/pushView/pushView.component");
var homeView_component_1 = require("../../modules/homeView/homeView.component");
exports.ROUTES = [
    /// start routes declaration
    { path: "pushView", component: pushView_component_1.PushViewComponent },
    { path: "homeView", component: homeView_component_1.HomeViewComponent },
    {
        path: "",
        component: homeView_component_1.HomeViewComponent
    }
    /// end routes declaration
];

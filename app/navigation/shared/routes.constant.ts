import {
    Routes
}
from "@angular/router";

/// modules imports
import { PushViewComponent } from "../../modules/pushView/pushView.component";
import { HomeViewComponent } from "../../modules/homeView/homeView.component";

export const ROUTES: Routes = [
    /// start routes declaration
{ path: "pushView", component: PushViewComponent },
{ path: "homeView", component: HomeViewComponent },
    {
        path: "",
        component: HomeViewComponent
    }
    /// end routes declaration
];
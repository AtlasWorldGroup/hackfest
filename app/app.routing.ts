import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { PushComponent } from './push/push.component';

const routes: Routes = [
    { path: '', redirectTo: '/push', pathMatch: 'full' },
    { path: 'push', component: PushComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
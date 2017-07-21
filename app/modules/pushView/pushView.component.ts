import {Component, ViewChild, OnInit, ChangeDetectorRef}from "@angular/core";

import {Observable}from "rxjs/Observable";
const dialogs = require("ui/dialogs");
import {TextField} from "ui/text-field";
import {Progress} from "ui/progress";
import * as PushNotifications from "nativescript-push-notifications";
import * as common from "./shared";
import * as shared from "../../shared";

@
    Component({
        moduleId: module.id,
        selector: "ns-pushView",
        templateUrl: "pushView.component.html"
        /// component definitions
    })

export class PushViewComponent
    implements OnInit {
    progressValue: number;
    id: string;
    isRegistered: boolean;
    isLoaded: boolean;
    registration: any;

    get title() {
        let result: string = "Enable Push";

        /// component custom title

        return result;
    }

    get service() {
        return this._service;
    }

    @ViewChild("name") nameInst;

    constructor(private _service: common.PushViewService, private cdRef: ChangeDetectorRef) {
        this.progressValue = 50;
        let settings = {
            senderID: '960612642914',
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                    identifier: 'READ_IDENTIFIER',
                    title: 'Read',
                    activationMode: 'foreground',
                    destructive: false,
                    authenticationRequired: true
                }, {
                    identifier: 'CANCEL_IDENTIFIER',
                    title: 'Cancel',
                    activationMode: 'foreground',
                    destructive: true,
                    authenticationRequired: true
                }],
                categories: [{
                    identifier: 'READ_CATEGORY',
                    actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                    actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                }]
            },
            notificationCallbackIOS: data => {
                console.log('DATA: ' + JSON.stringify(data));
            },
            notificationCallbackAndroid: (message, data, notification) => {
                console.log('MESSAGE: ' + JSON.stringify(message));
                console.log(`data: ${data}`);
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
                dialogs.alert(message).then(() => {
                    console.log(`dialog closed`);
                });
            }
        };
        PushNotifications.register(settings, data => {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            this.id = data;
            this._service.getByRegistration(JSON.stringify(data)).subscribe(
                (data) => {
                    this.progressValue = 100;
                    this.registration = data;
                    if (typeof this.registration.registrationId !== 'undefined' && typeof this.registration.name !== 'undefined') {
                        console.log('registered already');
                        this.isRegistered = true;
                    }
                    this.isLoaded = true;
                    this.cdRef.detectChanges();
                },
                (err) => {
                    this.isLoaded = true;
                    this.cdRef.detectChanges();
                },
            );
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }

    ngOnInit() {

    }

    onConfirm(name) {
        dialogs.alert(`Your ID is: ${this.id}`).then(() => {
            this._service.save({registrationId: this.id, name: name}).subscribe(
                () => {
                    dialogs.alert(`Hey ${name}, you'll be registered for push notifications now!`).then(() => {
                    });
                },
                () => {
                    dialogs.alert(`Sorry ${name}, there was an error :(`).then(() => {
                    });
                });
        });
    }

    onCancel() {
    }

}
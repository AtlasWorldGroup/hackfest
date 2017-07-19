import { Component, OnInit } from '@angular/core';
import * as PushNotifications from 'nativescript-push-notifications';

@Component({
    selector: 'ns-push',
    moduleId: module.id,
    templateUrl: './push.component.html',
})
export class PushComponent implements OnInit {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() {
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
                console.log('DATA: ' + JSON.stringify(data));
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
            }
        };
        PushNotifications.register(settings, data => {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }

    ngOnInit(): void {
    }
}
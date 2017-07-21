"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var PushNotifications = require("nativescript-push-notifications");
var common = require("./shared");
var PushViewComponent = (function () {
    function PushViewComponent(_service, cdRef) {
        var _this = this;
        this._service = _service;
        this.cdRef = cdRef;
        this.progressValue = 50;
        var settings = {
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
            notificationCallbackIOS: function (data) {
                console.log('DATA: ' + JSON.stringify(data));
            },
            notificationCallbackAndroid: function (message, data, notification) {
                console.log('MESSAGE: ' + JSON.stringify(message));
                console.log("data: " + data);
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
                dialogs.alert(message).then(function () {
                    console.log("dialog closed");
                });
            }
        };
        PushNotifications.register(settings, function (data) {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            _this.id = data;
            _this._service.getByRegistration(JSON.stringify(data)).subscribe(function (data) {
                _this.progressValue = 100;
                _this.registration = data;
                if (typeof _this.registration.registrationId !== 'undefined' && typeof _this.registration.name !== 'undefined') {
                    console.log('registered already');
                    _this.isRegistered = true;
                }
                _this.isLoaded = true;
                _this.cdRef.detectChanges();
            }, function (err) {
                _this.isLoaded = true;
                _this.cdRef.detectChanges();
            });
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
    }
    Object.defineProperty(PushViewComponent.prototype, "title", {
        get: function () {
            var result = "Enable Push";
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PushViewComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    PushViewComponent.prototype.ngOnInit = function () {
    };
    PushViewComponent.prototype.onConfirm = function (name) {
        var _this = this;
        dialogs.alert("Your ID is: " + this.id).then(function () {
            _this._service.save({ registrationId: _this.id, name: name }).subscribe(function () {
                dialogs.alert("Hey " + name + ", you'll be registered for push notifications now!").then(function () {
                });
            }, function () {
                dialogs.alert("Sorry " + name + ", there was an error :(").then(function () {
                });
            });
        });
    };
    PushViewComponent.prototype.onCancel = function () {
    };
    return PushViewComponent;
}());
__decorate([
    core_1.ViewChild("name"),
    __metadata("design:type", Object)
], PushViewComponent.prototype, "nameInst", void 0);
PushViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-pushView",
        templateUrl: "pushView.component.html"
        /// component definitions
    }),
    __metadata("design:paramtypes", [common.PushViewService, core_1.ChangeDetectorRef])
], PushViewComponent);
exports.PushViewComponent = PushViewComponent;

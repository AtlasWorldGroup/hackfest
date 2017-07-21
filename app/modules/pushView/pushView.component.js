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
            }, function (err) { console.log(err); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaFZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVzaFZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThFO0FBRzlFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUd0QyxtRUFBcUU7QUFDckUsaUNBQW1DO0FBV25DLElBQWEsaUJBQWlCO0lBc0IxQiwyQkFBb0IsUUFBZ0MsRUFBVSxLQUF3QjtRQUF0RixpQkEyREM7UUEzRG1CLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUc7WUFDWCxRQUFRLEVBQUUsY0FBYztZQUN4QixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxtQkFBbUIsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ04sVUFBVSxFQUFFLGlCQUFpQjt3QkFDN0IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixFQUFFO3dCQUNDLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLEtBQUssRUFBRSxRQUFRO3dCQUNmLGNBQWMsRUFBRSxZQUFZO3dCQUM1QixXQUFXLEVBQUUsSUFBSTt3QkFDakIsc0JBQXNCLEVBQUUsSUFBSTtxQkFDL0IsQ0FBQztnQkFDRixVQUFVLEVBQUUsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsZUFBZTt3QkFDM0Isd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDbEUsd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztxQkFDckUsQ0FBQzthQUNM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T0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFPLElBQUksdURBQW9ELENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUNEO2dCQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBUyxJQUFJLDRCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUF4R0QsSUF3R0M7QUFwRnNCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzttREFBVTtBQXBCbkIsaUJBQWlCO0lBUDFCLGdCQUFTLENBQUM7UUFDTixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0Qyx5QkFBeUI7S0FDNUIsQ0FBQztxQ0F3QjRCLE1BQU0sQ0FBQyxlQUFlLEVBQWlCLHdCQUFpQjtHQXRCN0UsaUJBQWlCLENBd0c3QjtBQXhHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCAsIFZpZXdDaGlsZCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZn1mcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtPYnNlcnZhYmxlfWZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuY29uc3QgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwidWkvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0ICogYXMgUHVzaE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gXCIuL3NoYXJlZFwiO1xyXG5pbXBvcnQgKiBhcyBzaGFyZWQgZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xyXG5cclxuQFxyXG4gICAgQ29tcG9uZW50KHtcclxuICAgICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgICAgIHNlbGVjdG9yOiBcIm5zLXB1c2hWaWV3XCIsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwicHVzaFZpZXcuY29tcG9uZW50Lmh0bWxcIlxyXG4gICAgICAgIC8vLyBjb21wb25lbnQgZGVmaW5pdGlvbnNcclxuICAgIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaFZpZXdDb21wb25lbnRcclxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpc1JlZ2lzdGVyZWQ6IGJvb2xlYW47XHJcbiAgICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICAgIHJlZ2lzdHJhdGlvbjogYW55O1xyXG5cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIkVuYWJsZSBQdXNoXCI7XHJcblxyXG4gICAgICAgIC8vLyBjb21wb25lbnQgY3VzdG9tIHRpdGxlXHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm5hbWVcIikgbmFtZUluc3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogY29tbW9uLlB1c2hWaWV3U2VydmljZSwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSA1MDtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHNlbmRlcklEOiAnOTYwNjEyNjQyOTE0JyxcclxuICAgICAgICAgICAgYmFkZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBhbGVydDogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmVTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiAnZm9yZWdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uTW9kZTogJ2ZvcmVncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0ZvckRlZmF1bHRDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RBVEE6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZDogKG1lc3NhZ2UsIGRhdGEsIG5vdGlmaWNhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01FU1NBR0U6ICcgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGF0YTogJHtkYXRhfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PVElGSUNBVElPTjogJyArIEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChtZXNzYWdlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlhbG9nIGNsb3NlZGApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFB1c2hOb3RpZmljYXRpb25zLnJlZ2lzdGVyKHNldHRpbmdzLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFR0lTVFJBVElPTiBJRDogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuZ2V0QnlSZWdpc3RyYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YSkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVnaXN0cmF0aW9uLnJlZ2lzdHJhdGlvbklkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5yZWdpc3RyYXRpb24ubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyZWQgYWxyZWFkeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMub25NZXNzYWdlUmVjZWl2ZWQoc2V0dGluZ3Mubm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Db25maXJtKG5hbWUpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KGBZb3VyIElEIGlzOiAke3RoaXMuaWR9YCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2F2ZSh7cmVnaXN0cmF0aW9uSWQ6IHRoaXMuaWQsIG5hbWU6IG5hbWV9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChgSGV5ICR7bmFtZX0sIHlvdSdsbCBiZSByZWdpc3RlcmVkIGZvciBwdXNoIG5vdGlmaWNhdGlvbnMgbm93IWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KGBTb3JyeSAke25hbWV9LCB0aGVyZSB3YXMgYW4gZXJyb3IgOihgKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==
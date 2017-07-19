"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PushNotifications = require("nativescript-push-notifications");
var PushComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function PushComponent() {
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
                console.log('DATA: ' + JSON.stringify(data));
                console.log('NOTIFICATION: ' + JSON.stringify(notification));
            }
        };
        PushNotifications.register(settings, function (data) {
            console.log('REGISTRATION ID: ' + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
    }
    PushComponent.prototype.ngOnInit = function () {
    };
    return PushComponent;
}());
PushComponent = __decorate([
    core_1.Component({
        selector: 'ns-push',
        moduleId: module.id,
        templateUrl: './push.component.html',
    }),
    __metadata("design:paramtypes", [])
], PushComponent);
exports.PushComponent = PushComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdXNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRUFBcUU7QUFPckUsSUFBYSxhQUFhO0lBQ3RCLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakg7UUFDSSxJQUFJLFFBQVEsR0FBRztZQUNYLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLG1CQUFtQixFQUFFO2dCQUNqQixPQUFPLEVBQUUsQ0FBQzt3QkFDTixVQUFVLEVBQUUsaUJBQWlCO3dCQUM3QixLQUFLLEVBQUUsTUFBTTt3QkFDYixjQUFjLEVBQUUsWUFBWTt3QkFDNUIsV0FBVyxFQUFFLEtBQUs7d0JBQ2xCLHNCQUFzQixFQUFFLElBQUk7cUJBQy9CLEVBQUU7d0JBQ0MsVUFBVSxFQUFFLG1CQUFtQjt3QkFDL0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixDQUFDO2dCQUNGLFVBQVUsRUFBRSxDQUFDO3dCQUNULFVBQVUsRUFBRSxlQUFlO3dCQUMzQix3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3dCQUNsRSx3QkFBd0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO3FCQUNyRSxDQUFDO2FBQ0w7WUFDRCx1QkFBdUIsRUFBRSxVQUFBLElBQUk7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsMkJBQTJCLEVBQUUsVUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVk7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDO1NBQ0osQ0FBQztRQUNGLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBQSxJQUFJO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7O0dBQ1csYUFBYSxDQWdEekI7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBQdXNoTm90aWZpY2F0aW9ucyBmcm9tICduYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1wdXNoJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHVzaC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQdXNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgc2VuZGVySUQ6ICc5NjA2MTI2NDI5MTQnLFxyXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6ICdmb3JlZ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdDQU5DRUxfSURFTlRJRklFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiAnZm9yZWdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25SZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0NBVEVHT1JZJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zRm9yRGVmYXVsdENvbnRleHQ6IFsnUkVBRF9JREVOVElGSUVSJywgJ0NBTkNFTF9JREVOVElGSUVSJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFUQTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAobWVzc2FnZSwgZGF0YSwgbm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTUVTU0FHRTogJyArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEQVRBOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PVElGSUNBVElPTjogJyArIEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBQdXNoTm90aWZpY2F0aW9ucy5yZWdpc3RlcihzZXR0aW5ncywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRUdJU1RSQVRJT04gSUQ6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIFB1c2hOb3RpZmljYXRpb25zLm9uTWVzc2FnZVJlY2VpdmVkKHNldHRpbmdzLm5vdGlmaWNhdGlvbkNhbGxiYWNrQW5kcm9pZCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn0iXX0=
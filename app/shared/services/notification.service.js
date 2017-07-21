"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogsModule = require("ui/dialogs");
var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.error = function (message) {
        if (message === void 0) { message = "Message"; }
        return dialogsModule.alert({
            title: "Error",
            okButtonText: "OK",
            message: message
        });
    };
    NotificationService.prototype.warning = function (message) {
        if (message === void 0) { message = "Message"; }
        return dialogsModule.alert({
            title: "Warning",
            okButtonText: "OK",
            message: message
        });
    };
    NotificationService.prototype.success = function (message) {
        if (message === void 0) { message = "Message"; }
        return dialogsModule.alert({
            title: "Success",
            okButtonText: "OK",
            message: message
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywwQ0FBNEM7QUFHNUMsSUFBYSxtQkFBbUI7SUFFOUI7SUFDRyxDQUFDO0lBRUosbUNBQUssR0FBTCxVQUFNLE9BQTJCO1FBQTNCLHdCQUFBLEVBQUEsbUJBQTJCO1FBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUSxPQUEyQjtRQUEzQix3QkFBQSxFQUFBLG1CQUEyQjtRQUNqQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QixLQUFLLEVBQUUsU0FBUztZQUNoQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLE9BQTJCO1FBQTNCLHdCQUFBLEVBQUEsbUJBQTJCO1FBQ2pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7O0dBQ0EsbUJBQW1CLENBNEIvQjtBQTVCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3NNb2R1bGUgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICApIHt9XHJcblxyXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZyA9IFwiTWVzc2FnZVwiKSB7XHJcbiAgICByZXR1cm4gZGlhbG9nc01vZHVsZS5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nID0gXCJNZXNzYWdlXCIpIHtcclxuICAgIHJldHVybiBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6IFwiV2FybmluZ1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyA9IFwiTWVzc2FnZVwiKSB7XHJcbiAgICByZXR1cm4gZGlhbG9nc01vZHVsZS5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NcIixcclxuICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
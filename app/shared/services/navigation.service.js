"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var enums_1 = require("../enums");
var NavigationService = (function () {
    function NavigationService(_router) {
        this._router = _router;
        this._modes = enums_1.NavigationModes;
        this._mode = this._modes.TABSTRIP;
        this._routes = [
            { path: "homeView", title: "Home View", icon: "\uf015" },
            { path: "pushView", title: "Enable Push", icon: "\uf019" },
        ];
        this._openDrawer$ = new rxjs_1.BehaviorSubject(false);
    }
    Object.defineProperty(NavigationService.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "routes", {
        get: function () {
            return this._routes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "openDrawer$", {
        get: function () {
            return this._openDrawer$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NavigationService.prototype.navigateIndex = function () {
        this._router.navigate(["/"]);
    };
    NavigationService.prototype.navigate = function (path) {
        this._router.navigate(["/" + path]);
    };
    NavigationService.prototype.toggleDrawer = function () {
        this._openDrawer$.next(!this._openDrawer$.getValue());
    };
    return NavigationService;
}());
NavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], NavigationService);
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3FCO0FBQ3JCLDBDQUd1QjtBQUV2Qiw2QkFHWTtBQUVaLGtDQUdnQjtBQVFoQixJQUFhLGlCQUFpQjtJQU8xQiwyQkFDWSxPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVBuQixXQUFNLEdBQUcsdUJBQWUsQ0FBQztRQVM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ3BFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7U0FFakQsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBZSxDQUFjLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxzQkFBSSxtQ0FBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSxpQkFBaUI7SUFEOUIsaUJBQVUsRUFBRTtxQ0FTYSxlQUFNO0dBUmxCLGlCQUFpQixDQTJDN0I7QUEzQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEluamVjdGFibGVcclxufVxyXG5mcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgUm91dGVyXHJcbn1cclxuZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEJlaGF2aW9yU3ViamVjdFxyXG59XHJcbmZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgTmF2aWdhdGlvbk1vZGVzXHJcbn1cclxuZnJvbSBcIi4uL2VudW1zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBOYXZpZ2F0aW9uSXRlbVxyXG59XHJcbmZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBcclxuSW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tb2RlcyA9IE5hdmlnYXRpb25Nb2RlcztcclxuICAgIHByaXZhdGUgX21vZGU6IE5hdmlnYXRpb25Nb2RlcztcclxuICAgIHByaXZhdGUgX3JvdXRlczogTmF2aWdhdGlvbkl0ZW1bXTtcclxuXHJcbiAgICBwcml2YXRlIF9vcGVuRHJhd2VyJDogQmVoYXZpb3JTdWJqZWN0IDwgYm9vbGVhbiA+IDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IHRoaXMuX21vZGVzLlRBQlNUUklQO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlcyA9IFtcclxuICAgICAgICAgICAgeyBwYXRoOiBcImhvbWVWaWV3XCIsIHRpdGxlOiBcIkhvbWUgVmlld1wiLCBpY29uOiBcIlxcdWYwMTVcIiB9LFxyXG57IHBhdGg6IFwicHVzaFZpZXdcIiwgdGl0bGU6IFwiRW5hYmxlIFB1c2hcIiwgaWNvbjogXCJcXHVmMDE5XCIgfSxcclxuLy8vIG5hdmlnYXRpb24gcm91dGVzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3BlbkRyYXdlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0IDwgYm9vbGVhbiA+IChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZGUoKTogTmF2aWdhdGlvbk1vZGVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm91dGVzKCk6IE5hdmlnYXRpb25JdGVtW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9wZW5EcmF3ZXIkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVuRHJhd2VyJC5hc09ic2VydmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZUluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGF0aF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURyYXdlcigpIHtcclxuICAgICAgICB0aGlzLl9vcGVuRHJhd2VyJC5uZXh0KCF0aGlzLl9vcGVuRHJhd2VyJC5nZXRWYWx1ZSgpKTtcclxuICAgIH1cclxufSJdfQ==
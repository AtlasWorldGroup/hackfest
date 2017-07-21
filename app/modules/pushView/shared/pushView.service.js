"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
/// service imports
var shared = require("../../../shared");
var PushViewService = (function () {
    function PushViewService(http, backendService) {
        this.http = http;
        this.backendService = backendService;
        this.apiUrl = "https://atlas-hackfest.herokuapp.com";
    }
    PushViewService.prototype.save = function (subscription) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl + "/api/subscriptions", JSON.stringify(subscription), { headers: headers }).map(function (res) { return res.json; }).map(function (data) {
        }).catch(this.handleError);
    };
    PushViewService.prototype.getByRegistration = function (id) {
        return this.http.get((this.apiUrl + "/api/subscriptions/id/" + id).replace(/"/g, '')).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PushViewService.prototype.getByName = function (name) {
        return this.http.get(this.apiUrl + "/api/subscriptions/name/" + name).toPromise().then(this.extract).catch(this.handleError);
    };
    PushViewService.prototype.extract = function (res) {
        if (res.status == 204) {
            // no content so return null
            return null;
        }
        var body = res.json();
        return body || {};
    };
    PushViewService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    };
    return PushViewService;
}());
PushViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, shared.BackendService])
], PushViewService);
exports.PushViewService = PushViewService;
/*
 import {Injectable}from "@angular/core";
 import { Http, Headers, Response} from "@angular/http"
 import { Observable } from "rxjs/Observable";
 import { BehaviorSubject } from "rxjs/BehaviorSubject";
 import "rxjs/add/operator/map";

 /// service imports
 import * as shared from "../../../shared";

 @
 Injectable()
 export class PushViewService {
 private apiRoot: string = 'https://atlas-hackfest.herokuapp.com';

 constructor(private http: Http) {
 }

 save(subscription: any) {
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 return this.http.post(`${this.apiRoot}/api/subscriptions`, JSON.stringify(subscription), {headers: headers}).map(res => res.json()).map(data => { return data.Result; }).catch(this.handleError);
 }

 getByRegistration(id: string) {
 return this.http.get(`${this.apiRoot}/api/subscriptions/id/${id}`).toPromise().then(this.extract).catch(this.handleError);
 }

 getByName(name: string) {
 return this.http.get(`${this.apiRoot}/api/subscriptions/name/${name}`).toPromise().then(this.extract).catch(this.handleError);
 }

 private extract(res: Response) {
 if (res.status == 204) {
 // no content so return null
 return null;
 }
 let body = res.json();
 return body || {};
 }

 private handleError(error: Response) {
 console.log(error);
 return Observable.throw(error);
 }
 }
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaFZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB1c2hWaWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0NBQXNEO0FBR3RELG1CQUFtQjtBQUNuQix3Q0FBMEM7QUFHMUMsSUFBYSxlQUFlO0lBR3hCLHlCQUFvQixJQUFVLEVBQVUsY0FBcUM7UUFBekQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUZyRSxXQUFNLEdBQUcsc0NBQXNDLENBQUM7SUFHeEQsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFBSyxZQUFpQjtRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxNQUFNLHVCQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7UUFDekksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLEVBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUcsSUFBSSxDQUFDLE1BQU0sOEJBQXlCLEVBQUksQ0FBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUksQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsTUFBTSxnQ0FBMkIsSUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFFTyxpQ0FBTyxHQUFmLFVBQWdCLEdBQWE7UUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLDRCQUE0QjtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLHFDQUFXLEdBQW5CLFVBQW9CLEtBQXFCO1FBQ3JDLG9FQUFvRTtRQUNwRSxJQUFJLE1BQWMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7UUFDbEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUlpQixXQUFJLEVBQTBCLE1BQU0sQ0FBQyxjQUFjO0dBSHBFLGVBQWUsQ0EwQzNCO0FBMUNZLDBDQUFlO0FBNEM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX1mcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQge30gZnJvbSBcIi4uLy4uLy4uL1wiXHJcbi8vLyBzZXJ2aWNlIGltcG9ydHNcclxuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFB1c2hWaWV3U2VydmljZSB7XHJcbiAgICBwcml2YXRlIGFwaVVybCA9IFwiaHR0cHM6Ly9hdGxhcy1oYWNrZmVzdC5oZXJva3VhcHAuY29tXCI7XHJcbiAgICBwcml2YXRlIG15U3Vic2NyaXB0aW9uczogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBzaGFyZWQuQmFja2VuZFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKHN1YnNjcmlwdGlvbjogYW55KSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybH0vYXBpL3N1YnNjcmlwdGlvbnNgLCBKU09OLnN0cmluZ2lmeShzdWJzY3JpcHRpb24pLCB7aGVhZGVyczogaGVhZGVyc30pLm1hcChyZXMgPT4gcmVzLmpzb24pLm1hcChkYXRhID0+IHtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJ5UmVnaXN0cmF0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFwaVVybH0vYXBpL3N1YnNjcmlwdGlvbnMvaWQvJHtpZH1gLnJlcGxhY2UoL1wiL2csJycpKS5tYXAocmVzID0+IHtyZXR1cm4gcmVzLmpzb24oKX0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnlOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpVXJsfS9hcGkvc3Vic2NyaXB0aW9ucy9uYW1lLyR7bmFtZX1gKS50b1Byb21pc2UoKS50aGVuKHRoaXMuZXh0cmFjdCkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0KHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDQpIHtcclxuICAgICAgICAgICAgLy8gbm8gY29udGVudCBzbyByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5IHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAgICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJNc2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gaW1wb3J0IHtJbmplY3RhYmxlfWZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbiBpbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxyXG4gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG4gaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG4gLy8vIHNlcnZpY2UgaW1wb3J0c1xyXG4gaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gXCIuLi8uLi8uLi9zaGFyZWRcIjtcclxuXHJcbiBAXHJcbiBJbmplY3RhYmxlKClcclxuIGV4cG9ydCBjbGFzcyBQdXNoVmlld1NlcnZpY2Uge1xyXG4gcHJpdmF0ZSBhcGlSb290OiBzdHJpbmcgPSAnaHR0cHM6Ly9hdGxhcy1oYWNrZmVzdC5oZXJva3VhcHAuY29tJztcclxuXHJcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuIH1cclxuXHJcbiBzYXZlKHN1YnNjcmlwdGlvbjogYW55KSB7XHJcbiBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVJvb3R9L2FwaS9zdWJzY3JpcHRpb25zYCwgSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKSwge2hlYWRlcnM6IGhlYWRlcnN9KS5tYXAocmVzID0+IHJlcy5qc29uKCkpLm1hcChkYXRhID0+IHsgcmV0dXJuIGRhdGEuUmVzdWx0OyB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuIH1cclxuXHJcbiBnZXRCeVJlZ2lzdHJhdGlvbihpZDogc3RyaW5nKSB7XHJcbiByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFwaVJvb3R9L2FwaS9zdWJzY3JpcHRpb25zL2lkLyR7aWR9YCkudG9Qcm9taXNlKCkudGhlbih0aGlzLmV4dHJhY3QpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gfVxyXG5cclxuIGdldEJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcclxuIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpUm9vdH0vYXBpL3N1YnNjcmlwdGlvbnMvbmFtZS8ke25hbWV9YCkudG9Qcm9taXNlKCkudGhlbih0aGlzLmV4dHJhY3QpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gfVxyXG5cclxuIHByaXZhdGUgZXh0cmFjdChyZXM6IFJlc3BvbnNlKSB7XHJcbiBpZiAocmVzLnN0YXR1cyA9PSAyMDQpIHtcclxuIC8vIG5vIGNvbnRlbnQgc28gcmV0dXJuIG51bGxcclxuIHJldHVybiBudWxsO1xyXG4gfVxyXG4gbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gcmV0dXJuIGJvZHkgfHwge307XHJcbiB9XHJcblxyXG4gcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuIGNvbnNvbGUubG9nKGVycm9yKTtcclxuIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuIH1cclxuIH1cclxuICovIl19
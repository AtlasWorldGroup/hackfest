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

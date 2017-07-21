import {Injectable}from "@angular/core";
import { Http, Headers, Response} from "@angular/http"
import { NativeScriptHttpModule } from "nativescript-angular/http"
import {} from "../../../"
/// service imports
import * as shared from "../../../shared";

@Injectable()
export class PushViewService {
    private apiUrl = "https://atlas-hackfest.herokuapp.com";
    private mySubscriptions: any;
    constructor(private http: Http, private backendService: shared.BackendService) {
    }

    save(subscription: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.apiUrl}/api/subscriptions`, JSON.stringify(subscription), {headers: headers}).map(res => res.json).map(data => {
        }).catch(this.handleError)
    }

    getByRegistration(id: string) {
        return this.http.get(`${this.apiUrl}/api/subscriptions/id/${id}`.replace(/"/g,'')).map(res => {return res.json()}).catch(this.handleError)
    }

    getByName(name: string) {
        return this.http.get(`${this.apiUrl}/api/subscriptions/name/${name}`).toPromise().then(this.extract).catch(this.handleError);
    }

    private extract(res: Response) {
        if (res.status == 204) {
            // no content so return null
            return null;
        }
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    }
}

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
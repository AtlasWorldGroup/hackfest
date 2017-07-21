export class BackendService {
    static _apiUrl = "https://atlas-hackfest.herokuapp.com";
    static get apiUrl(): string {
        return this._apiUrl;
    }
}
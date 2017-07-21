"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackendService = (function () {
    function BackendService() {
    }
    Object.defineProperty(BackendService, "apiUrl", {
        get: function () {
            return this._apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
BackendService._apiUrl = "https://atlas-hackfest.herokuapp.com";
exports.BackendService = BackendService;

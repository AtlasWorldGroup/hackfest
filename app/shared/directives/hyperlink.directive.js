"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var HyperlinkDirective = (function () {
    function HyperlinkDirective() {
    }
    HyperlinkDirective.prototype.tap = function () {
        utils.openUrl(this.url);
    };
    return HyperlinkDirective;
}());
__decorate([
    core_1.Input("nsHyperlink"),
    __metadata("design:type", String)
], HyperlinkDirective.prototype, "url", void 0);
__decorate([
    core_1.HostListener("tap"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HyperlinkDirective.prototype, "tap", null);
HyperlinkDirective = __decorate([
    core_1.Directive({
        selector: "[nsHyperlink]"
    })
], HyperlinkDirective);
exports.HyperlinkDirective = HyperlinkDirective;

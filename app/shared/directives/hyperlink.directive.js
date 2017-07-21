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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJsaW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh5cGVybGluay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFFL0QsbUNBQXFDO0FBS3JDLElBQWEsa0JBQWtCO0lBQS9CO0lBTUEsQ0FBQztJQUhzQixnQ0FBRyxHQUFIO1FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTHVCO0lBQXJCLFlBQUssQ0FBQyxhQUFhLENBQUM7OytDQUFhO0FBRWI7SUFBcEIsbUJBQVksQ0FBQyxLQUFLLENBQUM7Ozs7NkNBRW5CO0FBTFUsa0JBQWtCO0lBSDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtLQUMxQixDQUFDO0dBQ1csa0JBQWtCLENBTTlCO0FBTlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW25zSHlwZXJsaW5rXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIeXBlcmxpbmtEaXJlY3RpdmUge1xyXG4gIEBJbnB1dChcIm5zSHlwZXJsaW5rXCIpIHVybDogc3RyaW5nO1xyXG5cclxuICBASG9zdExpc3RlbmVyKFwidGFwXCIpIHRhcCgpIHtcclxuICAgIHV0aWxzLm9wZW5VcmwodGhpcy51cmwpO1xyXG4gIH1cclxufSJdfQ==
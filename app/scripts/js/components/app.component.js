"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var fetchmenu_service_1 = require('../services/fetchmenu.service');
var AppComponent = (function () {
    function AppComponent(_fetchMenuService) {
        this._fetchMenuService = _fetchMenuService;
        this.menu = this._fetchMenuService.fetchMenu();
    }
    //click event handle
    AppComponent.prototype.customClickEvent = function (event, value) {
        console.log('Click event handled by cutom click event.');
        console.log('Event using $event : ' + event);
        console.log('Value using custom ref : ' + value);
    };
    //implement ngOnInit
    AppComponent.prototype.ngOnInit = function () {
        this.localString = 'Modified in ngOnInit() hook.';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: 'app/partials/main.htm',
            providers: [fetchmenu_service_1.FetchMenuService]
        }), 
        __metadata('design:paramtypes', [fetchmenu_service_1.FetchMenuService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('../components/app.component');
var route_default_component_1 = require('../components/route.default.component');
var route1_component_1 = require('../components/route1.component');
var route2_component_1 = require('../components/route2.component');
var app_route_1 = require('../routing/app.route');
var highlight_directive_1 = require('../directives/highlight.directive');
var mail_service_1 = require('../services/mail.service');
var dependency_injection_component_1 = require('../components/dependency.injection.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_route_1.routing],
            declarations: [app_component_1.AppComponent, route_default_component_1.RouteDefaultComponent, route1_component_1.Route1Component, route2_component_1.Route2Component, highlight_directive_1.HighlightDirective,
                dependency_injection_component_1.DependencyInjectionComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: 'mail', useClass: mail_service_1.MailService },
                { provide: 'mailApi', useValue: 'globalVariableValue' }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
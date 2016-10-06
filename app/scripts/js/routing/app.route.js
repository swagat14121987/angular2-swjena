"use strict";
var router_1 = require('@angular/router');
var route_default_component_1 = require('../components/route.default.component');
var route1_component_1 = require('../components/route1.component');
var route2_component_1 = require('../components/route2.component');
var appRoutes = [
    {
        path: '',
        component: route_default_component_1.RouteDefaultComponent
    },
    {
        path: 'route1',
        component: route1_component_1.Route1Component
    },
    {
        path: 'route2',
        component: route2_component_1.Route2Component
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map
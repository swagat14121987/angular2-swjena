import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteDefaultComponent } from '../components/route.default.component';
import { Route1Component } from '../components/route1.component';
import { Route2Component } from '../components/route2.component';

const appRoutes: Routes = [
    {
        path: '',
        component: RouteDefaultComponent
    },
    {
        path: 'route1',
        component: Route1Component
    },
    {
        path: 'route2',
        component: Route2Component
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
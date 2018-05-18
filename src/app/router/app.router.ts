import {ModuleWithProviders} from '@angular/core';

import {Routes,RouterModule} from '@angular/router';

import {HomeComponentComponent} from '../home-component/home-component.component';
import {AboutComponentComponent} from '../about-component/about-component.component';
import {LoginComponentComponent} from '../login-component/login-component.component';

export const routes: Routes=[
    {path:'homePage',component:HomeComponentComponent},
    {path:'loginPage',component:LoginComponentComponent,pathMatch:'full'},
    {path:'aboutPage',component:AboutComponentComponent},
    {path:'*',component:LoginComponentComponent}
    ];

    export const routing:ModuleWithProviders=RouterModule.forRoot(routes,{useHash: true});


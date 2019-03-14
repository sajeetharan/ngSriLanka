import { NgModule } from '@angular/core';
import { ComingSoonPageComponent } from './components/coming-soon-page/coming-soon-page.component';

import { RouterModule, Routes } from '@angular/router';
import { SponsorshipPackagesComponent } from './components/sponsorship-packages/sponsorship-packages.component';

const Routes: Routes = [
    { path: 'packages', component: SponsorshipPackagesComponent },
]

@NgModule({

    imports: [
        RouterModule.forChild(Routes),
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
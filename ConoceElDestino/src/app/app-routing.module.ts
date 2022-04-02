import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { MainComponent } from './components/main/main.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { ServiceDetailComponent } from './components/services/service-detail/service-detail.component';
import { ServicesComponent } from './components/services/services.component';

const scrollPositionRestoration = true;

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent
  },
  { path: 'services/:serviceName/:serviceCode', component: ServiceDetailComponent },
  {
    path: 'collaborators',
    component: CollaboratorsComponent
  },
  {
    path: 'opinions',
    component: OpinionsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: ':section/details',
    component: ExperiencesComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

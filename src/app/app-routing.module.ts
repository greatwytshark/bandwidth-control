import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { BcpComponent } from './bcp/bcp.component';
import { AuthGuard } from './user/shared/auth.guard';
import { AuthService } from './user/shared/auth.service';
import { WebpComponent } from './bcp/webp/webp.component';
import { BprofileComponent } from './bprofile/bprofile.component';

const routes: Routes = [
  {
    path: 'signup',
    component: UserComponent,
    children:[{path: '', component: SignUpComponent}]
  },
  {
    path: 'login',
    component: UserComponent,
    children:[{path:'', component: SignInComponent}]
  },
  {
    path:'', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'bcp',
    component: BcpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'webp/:id',
    component: BcpComponent,
    children: [{path:'', component: WebpComponent}]
  },
  {
    path: 'webprofiles/:id/:active/:name',
    component: BprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

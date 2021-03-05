import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { LoginComponent } from './login/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'
import { IsAuthGuard } from './guards/is-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [IsAuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'new',
        component: NewTaskComponent
      },
      {
        path: 'new/:id',
        component: NewTaskComponent
      },
    ]
  },
  {
    path: 'loginModule',
    loadChildren: () => import('./login-module/login-module.module').then( m => m.LoginModuleModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

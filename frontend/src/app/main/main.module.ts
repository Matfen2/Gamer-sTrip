import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';

const routesPages : Routes = [
  {path: '', redirectTo:'/show', pathMatch: 'full'},
  {path: 'show', component: ShowComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
]

@NgModule({
  declarations: [
    ShowComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages)
  ]
})
export class MainModule { }

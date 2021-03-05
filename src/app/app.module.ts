import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import  { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AddEmojiPipe } from './pipes/add-emoji.pipe'
import { LoginModuleModule } from './login-module/login-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTaskComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    LoginComponent,
    MainLayoutComponent,
    AddEmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModuleModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

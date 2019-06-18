import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { ChildthreeComponent } from './childthree/childthree.component';
import{AuthService}from './auth.guard'
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

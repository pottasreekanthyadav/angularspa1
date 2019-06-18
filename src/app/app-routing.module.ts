import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent} from './pageone/pageone.component'
import { PagetwoComponent} from './pagetwo/pagetwo.component'
import { PagethreeComponent} from './pagethree/pagethree.component'
import {ChildoneComponent} from './childone/childone.component'
import {ChildtwoComponent} from './childtwo/childtwo.component'
import {ChildthreeComponent} from './childthree/childthree.component'
import {AuthService} from './auth.guard'
const routes: Routes = [
  {path:'pageone/:eid/:ename/:esal',component:PageoneComponent,
  children:[{path:'childone',component:ChildoneComponent}],
  canActivate:[AuthService],
  canActivateChild:[AuthService]
},
  {path:'pagetwo',component:PagetwoComponent,children:[{path:'childtwo',component:ChildtwoComponent}]},
  {path:'pagethree',component:PagethreeComponent,children:[{path:'childthree',component:ChildthreeComponent}]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

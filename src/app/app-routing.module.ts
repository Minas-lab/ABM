import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetalsComponent } from './client-detals/client-detals.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ClientComponent } from './client/client.component';



const routes: Routes = [
  {path:"", redirectTo:"client",pathMatch:"full"},
  {path:"client-detals",component:ClientDetalsComponent},
  {path:"thanks",component:ThanksComponent},
  {path:"client",component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

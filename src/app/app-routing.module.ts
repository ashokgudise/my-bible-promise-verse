import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetsPrayComponent } from './lets-pray/lets-pray.component';

const routes: Routes = [
  { path: '', component: LetsPrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

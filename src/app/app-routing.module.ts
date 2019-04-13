import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { VoteDisplayComponent } from './vote-display/vote-display.component';
import { VoteSnapComponent } from './vote-snap/vote-snap.component';

const routes: Routes = [
  {path: '', redirectTo: '/voteform', pathMatch: 'full'},
  {path: 'voteform', component: VoteFormComponent},
  {path: 'votedetail/:id', component: VoteDetailComponent},
  {path: 'votedisplay', component: VoteDisplayComponent},
  {path: 'votesnap', component: VoteSnapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

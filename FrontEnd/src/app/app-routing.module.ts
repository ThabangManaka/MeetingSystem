import { MeetingItemComponent } from './meeting-item/meeting-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

const routes: Routes = [
  {
    path: '', component: MeetingListComponent,

  },
  {
    path: 'MeetingItem/:id', component: MeetingItemComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

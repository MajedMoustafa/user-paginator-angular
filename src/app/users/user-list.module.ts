import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleUserComponent} from "./single-user/single-user.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import {UserCardComponent} from "./user-card/user-card.component";
import { UserListRoutingModule } from './user-list-routing.module';
import {UserListComponent} from "./user-list/user-list.component";

@NgModule({
  declarations: [
    SingleUserComponent,
    UserCardComponent,
    UserListComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    RouterModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }

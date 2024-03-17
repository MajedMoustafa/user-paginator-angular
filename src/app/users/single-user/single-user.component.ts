import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from 'src/app/base.component';
import {UserData , PageInfo} from "../../pagination/interfaces/paginator.model";
import {UserService} from "../user-list.service";


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent extends BaseComponent implements OnInit {
  id: number | undefined;
  user: UserData | undefined;
  message: string | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { super(); }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getSingleUser(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe( user => this.user = user);
  }

}

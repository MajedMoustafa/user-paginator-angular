import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UserCardComponent} from '../user-card/user-card.component';
import {UserData} from "../../pagination/interfaces/paginator.model";
import {PaginatonService} from "../../pagination/paginaton.service";
import {map, flatMap, takeUntil, tap} from 'rxjs/operators';
import {BaseComponent} from 'src/app/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit, OnChanges {

  constructor(private paginatorService: PaginatonService) {
    super();
  }



  users: UserData[];
  @Input() searchCounter;
  @Input() toSearchFor;

  ngOnInit(): void {
    this.getUsers();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchCounter && this.searchCounter > 0) {
      this.getUsers(this.toSearchFor);
      this.searchCounter = 0;
    }
  }

  trackByFn(index: number, item: UserCardComponent): UserCardComponent {
    return item;
  }

//frontend filter
  private getUsers(idSearch = null) {
    this.paginatorService.pageUpdates.pipe(map( pageInfo => pageInfo.data))
      .subscribe( usersData => {
        this.users = usersData.filter(usersData => !idSearch || (usersData.id == idSearch || usersData.email.toLowerCase().includes(idSearch) || usersData.first_name.toLowerCase().includes(idSearch) || usersData.last_name.toLowerCase().includes(idSearch)) );
      });
  }
}

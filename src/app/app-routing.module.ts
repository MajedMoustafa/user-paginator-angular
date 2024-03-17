import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginatorComponent} from "./pagination/components/paginator/paginator.component";

const routes: Routes = [
  {path: '', component: PaginatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




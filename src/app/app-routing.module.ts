import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavouritComponent } from "./favourit/favourit.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "fav", component: FavouritComponent },
  { path: "fav/:id", component: FavouritComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
